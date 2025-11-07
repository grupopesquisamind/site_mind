// =============================
// 🌐 Tradutor Unificado — Persistência Real entre Páginas
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

    // 🔹 Lê o idioma salvo ou define como português
    let idiomaAtual = localStorage.getItem("idiomaSelecionado") || "pt";
    btn.textContent = `🌐 ${langMap[idiomaAtual]}`;

    // 🔹 Aplica cookie ANTES de carregar o script do Google
    document.cookie = `googtrans=/auto/${idiomaAtual};path=/;`;

    // 🔹 Define função de tradução global exigida pelo Google
    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        {
          pageLanguage: "pt",
          includedLanguages: "pt,en,es,fr",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );

      // Reaplica idioma salvo após 1,5s
      setTimeout(() => this.aplicarIdioma(idiomaAtual, btn, langMap), 1500);
    };

    // 🔹 Carrega o script do Google
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.head.appendChild(script);

    // 🔹 Exibe / oculta o widget
    btn.addEventListener("click", () => {
      widget.classList.toggle("mostrar");
    });

    // 🔹 Detecta mudança de idioma
    const observer = new MutationObserver(() => {
      const iframe = document.querySelector("iframe.goog-te-menu-frame");
      if (!iframe) return;
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      const itens = doc.querySelectorAll(".goog-te-menu2-item span.text");
      itens.forEach((item) => {
        item.onclick = () => {
          const lang = item.innerText.trim().toLowerCase();
          this.salvarIdioma(lang, btn, langMap);
        };
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  salvarIdioma(lang, btn, map) {
    localStorage.setItem("idiomaSelecionado", lang);
    document.cookie = `googtrans=/auto/${lang};path=/;`;
    btn.textContent = `🌐 ${map[lang] || "PT"}`;
  }

  aplicarIdioma(lang, btn, map) {
    btn.textContent = `🌐 ${map[lang] || "PT"}`;
    localStorage.setItem("idiomaSelecionado", lang);
    document.cookie = `googtrans=/auto/${lang};path=/;`;
  }
}

customElements.define("meu-tradutor", MeuTradutor);
