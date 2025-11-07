
class MeuTradutor extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        #btnTradutor {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 2000;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          font-size: 20px;
          font-weight: bold;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: all 0.4s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        #btnTradutor:hover { background-color: #0056b3; transform: scale(1.1); }

        #google_translate_element {
          position: fixed;
          bottom: 90px;
          right: 20px;
          background: #f8f9fa;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 6px 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          pointer-events: none;
          z-index: 2001;
        }
        #google_translate_element.mostrar {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }
        .goog-te-gadget-simple {
          background-color: #fff !important;
          border-radius: 6px !important;
          border: 1px solid #ccc !important;
          padding: 5px !important;
        }
        .goog-te-gadget-icon { display: none !important; }
      </style>

      <button id="btnTradutor" aria-label="Traduzir página" title="Traduzir página">
        🌐 PT
      </button>
      <div id="google_translate_element"></div>
    `;

    this.initTradutor();
  }

  initTradutor() {
    const widget = this.querySelector("#google_translate_element");
    const btn = this.querySelector("#btnTradutor");

    const langMap = { pt: "PT", en: "EN", es: "ES", fr: "FR" };

    // === Carrega idioma salvo ou padrão ===
    let idiomaAtual =
      localStorage.getItem("idiomaSelecionado") ||
      "pt";

    const aplicarIdioma = (lang) => {
      const codigo = lang.toLowerCase();
      idiomaAtual = codigo;
      const label = langMap[codigo] || "PT";
      btn.textContent = `🌐 ${label}`;
      localStorage.setItem("idiomaSelecionado", codigo);
      document.cookie = `googtrans=/auto/${codigo};path=/;`;
    };

    aplicarIdioma(idiomaAtual);

    // === Função global obrigatória do Google ===
    window.inicializarTradutor = () => {
      new google.translate.TranslateElement(
        {
          pageLanguage: "pt",
          includedLanguages: "pt,en,es,fr",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );

      // Monitora URL e cookies para detectar idioma ativo
      const atualizarDoCookie = () => {
        const match = document.cookie.match(/googtrans=\/auto\/([^;]+)/);
        const lang = match ? match[1] : "pt";
        aplicarIdioma(lang);
      };
      setInterval(atualizarDoCookie, 1500);
    };

    // === Carrega script Google Translate ===
    if (!window.google || !window.google.translate) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=inicializarTradutor";
      document.head.appendChild(script);
    } else {
      window.inicializarTradutor();
    }

    // === Abre/fecha o widget ===
    btn.addEventListener("click", () => {
      widget.classList.toggle("mostrar");
    });
  }
}

customElements.define("meu-tradutor", MeuTradutor);
