class MeuMenu extends HTMLElement {
  constructor() {
    super();
    // Utilizando shadowRoot para isolamento de estilo e estrutura
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url("https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/tailwind.min.css");
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");

        :host {
          display: contents;
        }

        /* Estilização customizada da Sidebar baseada no padrão MIND */
        .sidebar-container {
          background-color: #0f172a; /* slate-900 */
          color: #cbd5e1; /* slate-300 */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-right: 1px solid #1e293b;
          height: 100vh;
          width: 16rem;
        }

        .nav-link-custom {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .nav-link-custom:hover {
          background-color: #1e293b;
          color: #ffffff;
        }

        .nav-link-custom.active {
          background-color: #f59e0b; /* amber-500 */
          color: #ffffff;
        }
      </style>

      <aside class="sidebar-container hidden md:flex">
        <div>
          <!-- Logo / Título -->
          <div class="h-16 flex items-center px-6 border-b border-slate-800">
            <span class="text-white font-black text-xl tracking-wider">MIND <span class="text-amber-400">LAB</span></span>
          </div>
          
          <!-- Links de Navegação Dinâmicos -->
          <nav class="p-4 space-y-1 menu">
            <a href="index.html" class="nav-link-custom"><i class="bi bi-house-door-fill text-lg"></i> Home</a>
            <a href="equipeatual.html" class="nav-link-custom"><i class="bi bi-people text-lg"></i> Equipe Atual</a>
            <a href="autores.html" class="nav-link-custom"><i class="bi bi-person-badge text-lg"></i> Autores</a>
            <a href="publicacoes.html" class="nav-link-custom"><i class="bi bi-journal-text text-lg"></i> Publicações</a>
            <a href="projetos.html" class="nav-link-custom"><i class="bi bi-kanban text-lg"></i> Projetos</a>
            <a href="galeriaeventoscongressos.html" class="nav-link-custom"><i class="bi bi-images text-lg"></i> Galeria</a>
            <a href="menucongressos.html" class="nav-link-custom"><i class="bi bi-award text-lg"></i> Congressos</a>
            <a href="eventos.html" class="nav-link-custom"><i class="bi bi-calendar-event text-lg"></i> Próximos Eventos</a>
            <a href="contato.html" class="nav-link-custom"><i class="bi bi-envelope text-lg"></i> Contato</a>
            <a href="sobre.html" class="nav-link-custom"><i class="bi bi-info-circle text-lg"></i> Sobre</a>
          </nav>
        </div>
        <div class="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
          MIND v2.6 • 2026
        </div>
      </aside>
    `;

    // LÓGICA DE LINK ATIVO (Mantendo a sua regra melhorada)
    const links = this.shadowRoot.querySelectorAll(".menu a");
    const caminho = window.location.pathname;

    links.forEach(link => {
      const href = link.getAttribute("href");

      // GRUPO AUTORES
      if (
        href.includes("autores.html") &&
        (
          caminho.includes("autores.html") ||
          caminho.includes("publicacoesautores.html") ||
          caminho.includes("galeriaautores.html")
        )
      ) {
        link.classList.add("active");
      }
      // PADRÃO
      else if (caminho.includes(href) && href !== "index.html") {
        link.classList.add("active");
      } else if (caminho.endsWith("/") && href === "index.html") {
        link.classList.add("active");
      }
    });
  }
}

customElements.define("meu-menu", MeuMenu);