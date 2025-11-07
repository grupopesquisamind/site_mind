// =========================
// 🌐 Componente: Tradutor Unificado (Botão + Persistência Global)
// =========================

class MeuTradutor extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        /* ===== BOTÃO FLUTUANTE ===== */
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

        #btnTradutor:hover {
          background-color: #0056b3;
          transform: scale(1.1);
        }

        /* ===== BOTÃO REDUZIDO AO ROLAR ===== */
        #btnTradutor.reduzido {
          opacity: 0.5;
          transform: scale(0.85);
        }

        /* ===== WIDGET ===== */
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

      <button id="btnTradutor" aria-label="Traduzir página" title="Traduzir página">
        🌐 PT
      </button>
      <div id="google_translate_element"></div>
    `;

    this.inicializarTradutor();
    this.configurarAnimacaoRolagem();
  }

  inicializarTradutor() {
    const widget = this.querySelector("#google_translate_element");
    const btn = this.querySelector("#btnTradutor");
    let widgetPronto = false;

    const salvarIdioma = (lang) => {
      localStorage.setItem("idiomaSelecionado", lang);
      document.cookie = `googtrans=/auto/${lang};path=/;`;
      try {
        sessionStorage.setItem("idiomaSelecionado", lang); // Fallback Safari
      } catch (e) {}
      window.dispatchEvent(new CustomEvent("idiomaAlterado", { detail: lang }));
    };

    const aplicarIdiomaSalvo = () => {
      const lang =
        localStorage.getItem("idiomaSelecionado") ||
        sessionStorage.getItem("idiomaSelecionado") ||
        "pt";

      document.cookie = `googtrans=/auto/${lang};path=/;`;
      btn.textContent = `🌐 ${lang.toUpperCase()}`;
      return lang;
    };

    // Função global obrigatória pelo Google
    window.inicializarTradutor = () => {
      try {
        new google.translate.TranslateElement(
          {
            pageLanguage: "pt",
            includedLanguages: "pt,en,es,fr",
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );

        widgetPronto = true;

        // Define idioma salvo
        const idiomaAtual = aplicarIdiomaSalvo();

        // Atualiza visual no botão quando muda via widget
        const observer = new MutationObserver(() => {
          const iframe = document.querySelector("iframe.goog-te-menu-frame");
          if (!iframe) return;
          iframe.contentWindow.document.querySelectorAll(".goog-te-menu2-item").forEach(item => {
            item.addEventListener("click", () => {
              const lang = item.querySelector("span.text").innerText.trim().toLowerCase();
              salvarIdioma(lang);
              btn.textContent = `🌐 ${lang.toUpperCase()}`;
            });
          });
        });
        observer.observe(document.body, { childList: true, subtree: true });
      } catch (e) {
        console.warn("⏳ Aguardando Google Translate...");
        setTimeout(window.inicializarTradutor, 1000);
      }
    };

    // Carrega o script oficial do Google Translate
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=inicializarTradutor";
    document.head.appendChild(script);

    // Exibe / oculta o widget
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

    aplicarIdiomaSalvo();

    // Sincroniza quando idioma é alterado em outro componente
    window.addEventListener("idiomaAlterado", (e) => {
      btn.textContent = `🌐 ${e.detail.toUpperCase()}`;
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

customElements.define("meu-tradutor", MeuTradutor);
