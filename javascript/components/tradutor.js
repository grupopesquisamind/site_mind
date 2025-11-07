// ==============================================
// 🌐 Tradutor Unificado (Menu + Botão Flutuante)
// ==============================================

class MeuTradutor extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        /* ====== MENU SUPERIOR ====== */
        .tradutor-menu {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.4rem;
          background: #f8f9fa;
          border-radius: 20px;
          padding: 4px 10px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
          font-size: 0.9rem;
          position: fixed;
          top: 10px;
          right: 10px;
          z-index: 3000;
        }
        .tradutor-menu button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          opacity: 0.6;
          transition: 0.3s;
        }
        .tradutor-menu button.ativo {
          opacity: 1;
          transform: scale(1.2);
        }

        /* ====== BOTÃO FLUTUANTE ====== */
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

        /* ====== WIDGET ====== */
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

      <!-- ====== MENU SUPERIOR ====== -->
      <div class="tradutor-menu" role="group" aria-label="Seleção de idioma">
        <button class="lang-btn" data-lang="pt" title="Português">🇧🇷</button>
        <button class="lang-btn" data-lang="en" title="English">🇬🇧</button>
        <button class="lang-btn" data-lang="es" title="Español">🇪🇸</button>
        <button class="lang-btn" data-lang="fr" title="Français">🇫🇷</button>
      </div>

      <!-- ====== BOTÃO FLUTUANTE ====== -->
      <button id="btnTradutor" aria-label="Traduzir página" title="Traduzir página">
        🌐 PT
      </button>
      <div id="google_translate_element"></div>
    `;

    this.inicializarTradutor();
  }

  inicializarTradutor() {
    const btn = this.querySelector("#btnTradutor");
    const widget = this.querySelector("#google_translate_element");
    const langButtons = this.querySelectorAll(".lang-btn");
    const langMap = { pt: "PT", en: "EN", es: "ES", fr: "FR" };

    let idiomaAtual = localStorage.getItem("idiomaSelecionado") || "pt";
    btn.textContent = `🌐 ${langMap[idiomaAtual]}`;
    this.atualizarMenu(langButtons, idiomaAtual);

    const aplicarIdioma = (lang) => {
      idiomaAtual = lang;
      localStorage.setItem("idiomaSelecionado", lang);
      document.cookie = `googtrans=/auto/${lang};path=/;`;
      btn.textContent = `🌐 ${langMap[lang] || "PT"}`;
      this.atualizarMenu(langButtons, lang);
      window.dispatchEvent(new CustomEvent("idiomaAlterado", { detail: lang }));

      const iframe = document.querySelector("iframe.goog-te-menu-frame");
      if (iframe) {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        const opt = [...doc.querySelectorAll(".goog-te-menu2-item span.text")].find(
          (el) => el.innerText.toLowerCase() === lang.toLowerCase()
        );
        if (opt) opt.click();
      }
    };

    // === Inicialização do Google Translate ===
    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        {
          pageLanguage: "pt",
          includedLanguages: "pt,en,es,fr",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );

      setTimeout(() => aplicarIdioma(idiomaAtual), 1500);
    };

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.head.appendChild(script);

    // === Botão flutuante ===
    btn.addEventListener("click", () => {
      widget.classList.toggle("mostrar");
    });

    // === Clique nos botões do menu ===
    langButtons.forEach((button) => {
      button.addEventListener("click", () => aplicarIdioma(button.dataset.lang));
    });

    // === Sincronização entre componentes ===
    window.addEventListener("idiomaAlterado", (e) => {
      if (e.detail !== idiomaAtual) {
        idiomaAtual = e.detail;
        btn.textContent = `🌐 ${langMap[idiomaAtual]}`;
        this.atualizarMenu(langButtons, idiomaAtual);
      }
    });
  }

  atualizarMenu(buttons, ativo) {
    buttons.forEach((btn) => {
      if (btn.dataset.lang === ativo) btn.classList.add("ativo");
      else btn.classList.remove("ativo");
    });
  }
}

customElements.define("meu-tradutor", MeuTradutor);
