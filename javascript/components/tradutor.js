class MeuTradutor extends HTMLElement {
  constructor() {
    super();
    this.idiomaAtual = "pt";
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        /* ===== Botão Flutuante ===== */
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
          font-size: 22px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: all 0.4s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        #btnTradutor:hover {
          background-color: #0056b3;
          transform: scale(1.1);
        }

        #btnTradutor.reduzido {
          opacity: 0.6;
          transform: scale(0.9);
        }

        /* ===== Widget ===== */
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
          background-color: #f8f9fa !important;
          border-radius: 6px !important;
          padding: 5px !important;
          border: 1px solid #ccc !important;
        }

        .goog-te-menu-value span {
          color: #000 !important;
        }

        .goog-te-gadget-icon {
          display: none !important;
        }

        small {
          font-size: 0.8rem;
          color: #555;
        }

        /* ===== Ícone com idioma ativo ===== */
        #idiomaAtivo {
          font-weight: 600;
          font-size: 0.8rem;
          position: absolute;
          bottom: 10px;
          right: 12px;
          color: #fff;
          text-shadow: 0 1px 3px rgba(0,0,0,0.4);
        }
      </style>

      <!-- Botão e Widget -->
      <button id="btnTradutor" title="Traduzir Página">
        🌐
        <span id="idiomaAtivo">PT</span>
      </button>
      <div id="google_translate_element"></div>
    `;

    this.inicializarTradutor();
    this.configurarAnimacaoRolagem();
  }

  inicializarTradutor() {
    let widgetPronto = false;
    const widget = this.querySelector("#google_translate_element");
    const idiomaSalvo = localStorage.getItem("idiomaSelecionado") || "pt";
    this.atualizarBotao(idiomaSalvo);

    // Callback oficial do Google
    window.inicializarTradutor = () => {
      try {
        new google.translate.TranslateElement({
          pageLanguage: 'pt',
          includedLanguages: 'pt,en,es,fr',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');

        widgetPronto = true;

        // Aplica idioma salvo automaticamente
        if (idiomaSalvo !== "pt") {
          this.aplicarIdioma(idiomaSalvo);
        }

        this.observarSelecao();
      } catch (e) {
        console.warn("Aguardando carregamento do tradutor...");
        setTimeout(window.inicializarTradutor, 1000);
      }
    };

    // Carrega script se ainda não existir
    if (!document.querySelector("script[src*='translate_a/element.js']")) {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=inicializarTradutor";
      document.head.appendChild(script);
    } else {
      window.inicializarTradutor();
    }

    // Clique no botão 🌐
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

  configurarAnimacaoRolagem() {
    const btn = this.querySelector("#btnTradutor");
    let rolando;

    window.addEventListener("scroll", () => {
      btn.classList.add("reduzido");
      clearTimeout(rolando);
      rolando = setTimeout(() => {
        btn.classList.remove("reduzido");
      }, 700);
    });
  }
}

customElements.define("meu-tradutor", MeuTradutor);
