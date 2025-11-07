// ======================================================
// 🌐 TRADUTOR GLOBAL MIND — Persistência total entre páginas
// ======================================================

class MeuTradutor extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .tradutor-menu {
          position: fixed;
          top: 0;
          right: 0;
          background: rgba(255,255,255,0.95);
          border-bottom-left-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
          padding: 6px 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 2001;
          font-family: 'Segoe UI', sans-serif;
        }

        .tradutor-menu button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          padding: 4px;
          opacity: 0.6;
          transition: all 0.3s;
        }

        .tradutor-menu button.ativo {
          opacity: 1;
          transform: scale(1.15);
        }

        .tradutor-menu img {
          width: 24px;
          height: 18px;
          border-radius: 3px;
        }

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
          font-size: 18px;
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

      <div class="tradutor-menu">
        <button data-lang="pt" title="Português"><img src="https://flagcdn.com/w20/br.png" alt="PT"></button>
        <button data-lang="en" title="Inglês"><img src="https://flagcdn.com/w20/gb.png" alt="EN"></button>
        <button data-lang="es" title="Espanhol"><img src="https://flagcdn.com/w20/es.png" alt="ES"></button>
        <button data-lang="fr" title="Francês"><img src="https://flagcdn.com/w20/fr.png" alt="FR"></button>
      </div>

      <button id="btnTradutor" aria-label="Traduzir página">🌐 PT</button>
      <div id="google_translate_element"></div>
    `;

    this.initTradutor();
  }

  initTradutor() {
    const btn = this.querySelector("#btnTradutor");
    const widget = this.querySelector("#google_translate_element");
    const langButtons = this.querySelectorAll(".tradutor-menu button");
    const langMap = { pt: "PT", en: "EN", es: "ES", fr: "FR" };

    // === Recupera idioma salvo (ou padrão PT)
    const idiomaSalvo = localStorage.getItem("idiomaSelecionado") || "pt";
    this.setCookieIdioma(idiomaSalvo);
    btn.textContent = `🌐 ${langMap[idiomaSalvo]}`;
    langButtons.forEach(b => b.classList.toggle("ativo", b.dataset.lang === idiomaSalvo));

    // === Inicializa Google Translate
    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        {
          pageLanguage: "pt",
          includedLanguages: "pt,en,es,fr",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
      setTimeout(() => this.aplicarIdioma(idiomaSalvo, btn, langButtons, langMap), 1500);
    };

    // === Carrega script do Google
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.head.appendChild(script);

    // === Exibe/Oculta widget
    btn.addEventListener("click", () => {
      widget.classList.toggle("mostrar");
    });

    // === Clique nas bandeiras
    langButtons.forEach(b => {
      b.addEventListener("click", () => {
        const lang = b.dataset.lang;
        this.salvarIdioma(lang);
        this.aplicarIdioma(lang, btn, langButtons, langMap);
        location.reload(); // Recarrega para aplicar tradução antes do Google ler o cookie
      });
    });
  }

  salvarIdioma(lang) {
    localStorage.setItem("idiomaSelecionado", lang);
    this.setCookieIdioma(lang);
  }

  aplicarIdioma(lang, btn, buttons, map) {
    btn.textContent = `🌐 ${map[lang] || "PT"}`;
    buttons.forEach(b => b.classList.toggle("ativo", b.dataset.lang === lang));
    this.setCookieIdioma(lang);
  }

  setCookieIdioma(lang) {
    document.cookie = `googtrans=/auto/${lang};path=/;`;
    document.cookie = `googtrans=/pt/${lang};path=/;`; // força o Google Translate a aplicar corretamente
  }
}

customElements.define("meu-tradutor", MeuTradutor);
