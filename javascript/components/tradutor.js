class TradutorMenu extends HTMLElement {
  constructor() {
    super();
    this.idiomaAtual = "pt"; // idioma padrão inicial
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .tradutor-menu {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: 15px;
          position: relative;
        }

        #btnTradutor {
          background-color: transparent;
          border: none;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: all 0.3s ease;
        }

        #btnTradutor:hover {
          color: #ffd700;
          transform: scale(1.05);
        }

        #google_translate_element {
          display: none;
          position: absolute;
          top: 40px;
          right: 0;
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          padding: 5px 10px;
          z-index: 5000;
          animation: fadeIn 0.3s ease;
        }

        #google_translate_element.mostrar {
          display: block;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .goog-te-gadget-simple {
          background-color: #f8f9fa !important;
          border-radius: 6px !important;
          padding: 4px !important;
          border: 1px solid #ccc !important;
        }

        .goog-te-menu-value span {
          color: #000 !important;
        }

        .goog-te-gadget-icon {
          display: none !important;
        }

        #idiomaAtivo {
          font-weight: 600;
          color: #ffd700;
        }
      </style>

      <div class="tradutor-menu">
        <button id="btnTradutor" title="Selecionar idioma">
          🌐 <span id="idiomaAtivo">PT</span>
        </button>
        <div id="google_translate_element"></div>
      </div>
    `;

    this.inicializarTradutor();
  }

  inicializarTradutor() {
    const widget = this.querySelector("#google_translate_element");
    let widgetPronto = false;
    const idiomaSalvo = localStorage.getItem("idiomaSelecionado") || "pt";
    this.atualizarBotao(idiomaSalvo);

    // Callback do Google Translate
    window.inicializarTradutor = () => {
      try {
        new google.translate.TranslateElement({
          pageLanguage: 'pt',
          includedLanguages: 'pt,en,es,fr',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');

        widgetPronto = true;

        if (idiomaSalvo !== "pt") {
          this.aplicarIdioma(idiomaSalvo);
        }

        this.observarSelecao();
      } catch (e) {
        console.warn("Aguardando carregamento do tradutor...");
        setTimeout(window.inicializarTradutor, 1000);
      }
    };

    if (!document.querySelector("script[src*='translate_a/element.js']")) {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=inicializarTradutor";
      document.head.appendChild(script);
    } else {
      window.inicializarTradutor();
    }

    const btn = this.querySelector("#btnTradutor");
    btn.addEventListener("click", () => {
      if (!widgetPronto) {
        widget.innerHTML = "<small>Carregando tradutor...</small>";
        widget.classList.add("mostrar");
        return;
      }
      widget.classList.toggle("mostrar");
      if (widget.classList.contains("mostrar")) this.destacarIdiomaAtual();
    });
  }

  observarSelecao() {
    const observer = new MutationObserver(() => {
      const iframe = document.querySelector("iframe.goog-te-menu-frame");
      if (!iframe) return;

      const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      const links = innerDoc.querySelectorAll(".goog-te-menu2-item div.text");

      links.forEach(link => {
        link.addEventListener("click", () => {
          const idiomaSelecionado = this.mapearIdioma(link.textContent.trim());
          localStorage.setItem("idiomaSelecionado", idiomaSelecionado);
          this.atualizarBotao(idiomaSelecionado);
          this.destacarIdiomaAtual();
        });
      });

      // Destaca idioma atual no menu quando ele é aberto
      this.destacarIdiomaAtual();
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  aplicarIdioma(codigo) {
    const frame = document.querySelector("iframe.goog-te-menu-frame");
    if (!frame) {
      setTimeout(() => this.aplicarIdioma(codigo), 1000);
      return;
    }

    const innerDoc = frame.contentDocument || frame.contentWindow.document;
    const links = innerDoc.querySelectorAll(".goog-te-menu2-item div.text");

    links.forEach(link => {
      const idioma = this.mapearIdioma(link.textContent.trim());
      if (idioma === codigo) {
        link.click();
        this.atualizarBotao(idioma);
        this.destacarIdiomaAtual();
      }
    });
  }

  destacarIdiomaAtual() {
    const idiomaAtivo = localStorage.getItem("idiomaSelecionado") || "pt";
    const frame = document.querySelector("iframe.goog-te-menu-frame");
    if (!frame) return;

    const innerDoc = frame.contentDocument || frame.contentWindow.document;
    const links = innerDoc.querySelectorAll(".goog-te-menu2-item div.text");

    links.forEach(link => {
      const idioma = this.mapearIdioma(link.textContent.trim());
      link.parentElement.style.background = idioma === idiomaAtivo ? "#fff8c4" : "";
      link.style.fontWeight = idioma === idiomaAtivo ? "bold" : "normal";
    });
  }

  mapearIdioma(nome) {
    const nomeMin = nome.toLowerCase();
    if (nomeMin.startsWith("port")) return "pt";
    if (nomeMin.startsWith("ing") || nomeMin.startsWith("en")) return "en";
    if (nomeMin.startsWith("esp") || nomeMin.startsWith("es")) return "es";
    if (nomeMin.startsWith("fra") || nomeMin.startsWith("fr")) return "fr";
    return "pt";
  }

  atualizarBotao(codigo) {
    const idiomaMap = { pt: "PT", en: "EN", es: "ES", fr: "FR" };
    const span = this.querySelector("#idiomaAtivo");
    if (span) span.textContent = idiomaMap[codigo] || "PT";
  }
}

customElements.define("tradutor-menu", TradutorMenu);
