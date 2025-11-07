// =========================
// 🌐 Componente Tradutor Global (bandeiras + persistência + sem barra Google)
// =========================

class MeuTradutor extends HTMLElement {
  constructor() {
    super();
    this.idiomaAtual = "pt";
  }

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
          border-radius: 50px;
          height: 48px;
          padding: 0 16px;
          font-size: 16px;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
        #btnTradutor:hover {
          background-color: #0056b3;
          transform: scale(1.05);
        }
        #google_translate_element {
          position: fixed;
          bottom: 80px;
          right: 20px;
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          pointer-events: none;
          z-index: 3000;
        }
        #google_translate_element.mostrar {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }

        /* Bandeira */
        #bandeiraIdioma {
          font-size: 20px;
        }

        /* Remove completamente a barra e tooltip */
        body > .skiptranslate, 
        .goog-te-banner-frame, 
        .goog-te-balloon-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .goog-tooltip, 
        .goog-tooltip:hover, 
        .goog-text-highlight {
          display: none !important;
          background: none !important;
          box-shadow: none !important;
        }

        /* Responsivo */
        @media (max-width: 768px) {
          #btnTradutor {
            top: 10px;
            bottom: auto;
            right: 10px;
            font-size: 14px;
            height: 42px;
            padding: 0 12px;
          }
          #google_translate_element {
            top: 60px;
            bottom: auto;
            right: 10px;
          }
        }
      </style>

      <button id="btnTradutor" title="Traduzir página">
        <span id="bandeiraIdioma">🇧🇷</span>
        <span id="idiomaAtivo">PT</span>
      </button>
      <div id="google_translate_element"></div>
    `;

    this.inicializarTradutor();
  }

  inicializarTradutor() {
    const widget = this.querySelector("#google_translate_element");
    const btn = this.querySelector("#btnTradutor");

    const idiomaSalvo = this.obterIdiomaSalvo();
    this.definirCookie(idiomaSalvo);
    this.atualizarBotao(idiomaSalvo);

    // Função global exigida pelo Google
    window.inicializarTradutor = () => {
      new google.translate.TranslateElement(
        {
          pageLanguage: "pt",
          includedLanguages: "pt,en,es,fr",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );

      // Aplica automaticamente o idioma salvo
      if (idiomaSalvo !== "pt") {
        setTimeout(() => this.aplicarIdioma(idiomaSalvo), 1000);
      }

      this.observarSelecao();
    };

    // Carregar script do Google uma única vez
    if (!document.querySelector("script[src*='translate_a/element.js']")) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=inicializarTradutor";
      document.head.appendChild(script);
    } else {
      window.inicializarTradutor();
    }

    // Mostra/Oculta o widget
    btn.addEventListener("click", () => {
      widget.classList.toggle("mostrar");
      if (widget.classList.contains("mostrar")) this.destacarIdiomaAtual();
    });
  }

  observarSelecao() {
    const observer = new MutationObserver(() => {
      const iframe = document.querySelector("iframe.goog-te-menu-frame");
      if (!iframe) return;

      const inner = iframe.contentDocument || iframe.contentWindow.document;
      const opcoes = inner.querySelectorAll(".goog-te-menu2-item div.text");

      opcoes.forEach((opcao) => {
        opcao.addEventListener("click", () => {
          const idioma = this.mapearIdioma(opcao.textContent.trim());
          localStorage.setItem("idiomaSelecionado", idioma);
          this.definirCookie(idioma);
          this.atualizarBotao(idioma);
        });
      });

      this.destacarIdiomaAtual();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  aplicarIdioma(lang) {
    this.definirCookie(lang);
    const frame = document.querySelector("iframe.goog-te-menu-frame");
    if (!frame) {
      setTimeout(() => this.aplicarIdioma(lang), 1000);
      return;
    }

    const inner = frame.contentDocument || frame.contentWindow.document;
    const opcoes = inner.querySelectorAll(".goog-te-menu2-item div.text");

    opcoes.forEach((opcao) => {
      const idioma = this.mapearIdioma(opcao.textContent.trim());
      if (idioma === lang) opcao.click();
    });

    this.atualizarBotao(lang);
  }

  destacarIdiomaAtual() {
    const idiomaAtivo = this.obterIdiomaSalvo();
    const frame = document.querySelector("iframe.goog-te-menu-frame");
    if (!frame) return;

    const inner = frame.contentDocument || frame.contentWindow.document;
    const opcoes = inner.querySelectorAll(".goog-te-menu2-item div.text");

    opcoes.forEach((opcao) => {
      const idioma = this.mapearIdioma(opcao.textContent.trim());
      opcao.parentElement.style.background =
        idioma === idiomaAtivo ? "#fff8c4" : "";
      opcao.style.fontWeight = idioma === idiomaAtivo ? "bold" : "normal";
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

  atualizarBotao(lang) {
    const idiomas = {
      pt: { texto: "PT", bandeira: "🇧🇷" },
      en: { texto: "EN", bandeira: "🇬🇧" },
      es: { texto: "ES", bandeira: "🇪🇸" },
      fr: { texto: "FR", bandeira: "🇫🇷" },
    };
    const atual = idiomas[lang] || idiomas.pt;
    this.querySelector("#bandeiraIdioma").textContent = atual.bandeira;
    this.querySelector("#idiomaAtivo").textContent = atual.texto;
  }

  obterIdiomaSalvo() {
    return localStorage.getItem("idiomaSelecionado") || "pt";
  }

  definirCookie(lang) {
    document.cookie = `googtrans=/auto/${lang};path=/;domain=${location.hostname}`;
  }
}

customElements.define("meu-tradutor", MeuTradutor);
