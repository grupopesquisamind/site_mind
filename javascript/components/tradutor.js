class MeuTradutor extends HTMLElement {
  constructor() {
    super();
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
          font-size: 24px;
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

        /* ===== Estado reduzido ao rolar ===== */
        #btnTradutor.reduzido {
          opacity: 0.5;
          transform: scale(0.85);
        }

        /* ===== Widget do Tradutor ===== */
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

        /* ===== Estilo interno do widget ===== */
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
      </style>

      <!-- Botão + Widget -->
      <button id="btnTradutor" title="Traduzir Página">
        🌐
      </button>
      <div id="google_translate_element"></div>
    `;

    this.inicializarTradutor();
    this.configurarAnimacaoRolagem();
  }

  inicializarTradutor() {
    let widgetPronto = false;
    const widget = this.querySelector("#google_translate_element");

    // Callback exigido pelo Google
    window.inicializarTradutor = function () {
      try {
        new google.translate.TranslateElement({
          pageLanguage: 'pt',
          includedLanguages: 'pt,en,es,fr',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
        widgetPronto = true;
      } catch (e) {
        console.warn("Aguardando carregamento do tradutor...");
        setTimeout(window.inicializarTradutor, 1000);
      }
    };

    // Carrega script oficial do Google Translate
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=inicializarTradutor";
    document.head.appendChild(script);

    // Controle de exibição do widget
    const btn = this.querySelector("#btnTradutor");
    btn.addEventListener("click", () => {
      if (!widgetPronto) {
        widget.innerHTML = "<small>Carregando tradutor...</small>";
        widget.classList.add("mostrar");
        return;
      }

      if (widget.classList.contains("mostrar")) {
        widget.classList.remove("mostrar");
        setTimeout(() => (widget.style.display = "none"), 400);
      } else {
        widget.style.display = "block";
        setTimeout(() => widget.classList.add("mostrar"), 10);
      }
    });
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

// Registra o componente personalizado
customElements.define("meu-tradutor", MeuTradutor);
