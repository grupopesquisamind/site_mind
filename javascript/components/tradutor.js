// =============================
// 🌐 Tradutor Unificado — versão persistente e sincronizada
// =============================

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
      </style>

      <button id="btnTradutor" aria-label="Traduzir página" title="Traduzir página">
        🌐 PT
      </button>
      <div id="google_translate_element"></div>
    `;

    this.initTradutor();
  }

  initTradutor() {
    const btn = this.querySelector("#btnTradutor");
    const widget = this.querySelector("#google_translate_element");
    const langMap = { pt: "PT", en: "EN", es: "ES", fr: "FR" };

    // 🔹 Carrega idioma salvo (ou padrão)
    let idiomaAtual = localStorage.getItem("idiomaSelecionado") || "pt";
    btn.textContent = `🌐 ${langMap[idiomaAtual]}`;

    // 🔹 Função para aplicar idioma ao Google Translate
    const aplicarIdioma = (lang) => {
      localStorage.setItem("idiomaSelecionado", lang);
      document.cookie = `googtrans=/auto/${lang};path=/;`;
      btn.textContent = `🌐 ${langMap[lang] || "PT"}`;

      const iframe = document.querySelector("iframe.goog-te-menu-frame");
      if (iframe) {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        const opt = [...doc.querySelectorAll(".goog-te-menu2-item span.text")].find(
          (el) => el.innerText.toLowerCase() === lang.toLowerCase()
        );
        if (opt) opt.click();
      }
    };

    // 🔹 Inicializa Google Translate
    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        {
          pageLanguage: "pt",
          includedLanguages: "pt,en,es,fr",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );

      // Aplica idioma salvo após carregamento
      setTimeout(() => aplicarIdioma(idiomaAtual), 1500);
    };

    // 🔹 Carrega o script do Google Translate
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.head.appendChild(script);

    // 🔹 Controle do botão flutuante
    btn.addEventListener("click", () => {
      widget.classList.toggle("mostrar");
    });

    // 🔹 Observa mudança no iframe e atualiza idioma escolhido
    const observer = new MutationObserver(() => {
      const iframe = document.querySelector("iframe.goog-te-menu-frame");
      if (!iframe) return;
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      const itens = doc.querySelectorAll(".goog-te-menu2-item span.text");
      itens.forEach((item) => {
        item.onclick = () => {
          const novo = item.innerText.trim().toLowerCase();
          aplicarIdioma(novo);
        };
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
}

customElements.define("meu-tradutor", MeuTradutor);
