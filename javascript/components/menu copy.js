class MeuMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Botão redondo flutuante */
        #menu-toggle-btn {
          position: fixed;
          top: 15px;
          left: 15px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0d6efd, #6610f2);
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1051;
          box-shadow: 0 4px 6px rgba(0,0,0,0.2);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        #menu-toggle-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 12px rgba(0,0,0,0.3);
        }

        #menu-icon {
          font-size: 1.5rem;
        }

        /* Offcanvas menu */
        .offcanvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 260px;
          height: 100%;
          background: linear-gradient(180deg, #0d6efd, #6610f2);
          color: white;
          transform: translateX(-100%);
          transition: transform 0.3s ease-in-out;
          padding-top: 60px;
          z-index: 1050;
        }

        .offcanvas.show {
          transform: translateX(0);
        }

        .offcanvas-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.2);
        }

        .offcanvas-title {
          font-size: 1.2rem;
          font-weight: bold;
        }

        .btn-close {
          background: none;
          border: none;
          color: white;
          font-size: 1.3rem;
          cursor: pointer;
        }

        nav {
          display: flex;
          flex-direction: column;
          padding: 1rem;
        }

        nav a {
          color: white;
          text-decoration: none;
          padding: 10px;
          border-radius: 8px;
          transition: background 0.3s;
          font-size: 1rem;
        }

        nav a:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      </style>

      <!-- Botão flutuante -->
      <button id="menu-toggle-btn">
        <span id="menu-icon">☰</span>
      </button>

      <!-- Offcanvas -->
      <div class="offcanvas" id="menuOffcanvas">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Menu</h5>
          <button class="btn-close" id="closeMenu">&times;</button>
        </div>
        <nav>
          <a href="index.html">🏠 Início</a>
          <a href="sobre.html">ℹ️ Sobre</a>
          <a href="projetos.html">📌 Projetos</a>
          <a href="publicacoes.html">📚 Publicações</a>
          <a href="autores.html">👥 Autores</a>
          <a href="contato.html">✉️ Contato</a>
        </nav>
      </div>
    `;

    const btnToggle = this.shadowRoot.querySelector("#menu-toggle-btn");
    const offcanvas = this.shadowRoot.querySelector("#menuOffcanvas");
    const btnClose = this.shadowRoot.querySelector("#closeMenu");

    btnToggle.addEventListener("click", () => {
      offcanvas.classList.add("show");
    });

    btnClose.addEventListener("click", () => {
      offcanvas.classList.remove("show");
    });
  }
}

customElements.define("meu-menu", MeuMenu);

