class MeuMenu extends HTMLElement { 
  connectedCallback() {
    this.innerHTML = `
      <style>
        /* ======= Estilos gerais do menu ======= */
        .offcanvas {
          width: 260px !important;
          background-color: #212529;
          transition: all 0.3s;
        }

        .nav-link, .nav-link i {
          color: #fff !important;
          text-decoration: none;
        }

        .nav-link:hover, .nav-link.active {
          background-color: #0d6efd;
          color: white;
          font-weight: bold;
        }

        .submenu .nav-link {
          padding-left: 2rem;
          font-size: 15px;
        }

        /* ======= Botão hambúrguer ======= */
        #menu-toggle-btn {
          position: fixed;
          top: 15px;
          left: 15px;
          z-index: 1050;
          background: rgba(0, 0, 0, 0.6);
          border: none;
          color: white;
          border-radius: 6px;
          padding: 6px 10px;
          transition: all 0.3s ease;
        }

        #menu-toggle-btn:hover {
          background: rgba(4, 99, 223, 0.81);
        }

        #menu-toggle-btn i {
          font-size: 1.6rem;
        }

        /* ======= Responsividade geral ======= */
        @media (max-width: 992px) {
          .offcanvas { width: 80% !important; }
        }

        @media (max-width: 768px) {
          #menu-toggle-btn { top: 10px; left: 10px; padding: 5px 8px; }
          .offcanvas { width: 90% !important; }
          .submenu .nav-link { font-size: 14px; }
        }

        @media (max-width: 480px) {
          #menu-toggle-btn i { font-size: 1.4rem; }
          .offcanvas { width: 100% !important; }
          figcaption { font-size: 14px !important; }
          #dataHora { font-size: 13px !important; }
        }

        /* ===== Ajuste para desktop com menu fixo ===== */
        @media (min-width: 993px) {
          .offcanvas-start {
            position: fixed !important;
            transform: none !important;
            visibility: visible !important;
            height: 100vh;
            top: 0;
            left: 0;
            width: 260px;
            max-width: 260px;
            min-width: 260px;
            border-right: 1px solid #ddd;
            background-color: #212529;
            z-index: 1040;
            overflow-y: auto;
          }

          #page-wrapper {
            margin-left: 260px; /* desloca o conteúdo para a direita do menu */
          }

          .offcanvas-backdrop {
            display: none !important;
          }

          #menu-toggle-btn {
            display: none !important;
          }
        }
      </style>

      <!-- Botão hambúrguer -->
      <button class="btn" id="menu-toggle-btn" data-bs-toggle="offcanvas" data-bs-target="#menuOffcanvas" aria-controls="menuOffcanvas">
        <i class="bi bi-list"></i>
      </button>

      <!-- Menu lateral -->
      <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="menuOffcanvas">
        <figure style="text-align: center; margin-top: 10px;">
          <img src="imagens/nome-mind.jpg" alt="MIND" style="max-width: 150px; border-radius: 5%;" class="me-2">
          <figcaption style="font-size: 16px; color: #fff; margin-top: 0px;">Grupo de Pesquisa</figcaption>
        </figure>

        <div class="offcanvas-body d-flex flex-column p-0">
          <nav class="nav flex-column">
            <a class="nav-link d-flex align-items-center gap-2" href="home.html"><i class="bi bi-house-door"></i> Início</a>
            <a class="nav-link d-flex align-items-center gap-2 equipe-atual" href="equipeatual.html"><i class="bi bi-person-fill"></i> Equipe Atual</a>

            <!-- Autores -->
            <a class="nav-link d-flex align-items-center gap-2" data-bs-toggle="collapse" data-bs-target="#submenuAutores" role="button" aria-expanded="false" aria-controls="submenuAutores">
              <i class="bi bi-people-fill"></i> Autores <i class="bi bi-caret-down ms-auto"></i>
            </a>
            <div class="collapse submenu" id="submenuAutores">
              <a class="nav-link d-flex align-items-center gap-2" href="publicacoesautores.html"><i class="bi bi-card-list"></i> Publicações por Autores</a>
              <a class="nav-link d-flex align-items-center gap-2" href="autores.html"><i class="bi bi-person-vcard"></i> Lista de Autores</a>
              <a class="nav-link d-flex align-items-center gap-2" href="galeriaautores.html"><i class="bi bi-collection-play-fill"></i> Galeria de Autores</a>
            </div>

            <!-- Congressos -->
            <a class="nav-link d-flex align-items-center gap-2" data-bs-toggle="collapse" data-bs-target="#submenuCongressos" role="button" aria-expanded="false" aria-controls="submenuCongressos">
              <i class="bi bi-images"></i> Congressos e Eventos <i class="bi bi-caret-down ms-auto"></i>
            </a>
            <div class="collapse submenu" id="submenuCongressos">
              <a class="nav-link d-flex align-items-center gap-2" href="menucongressos.html"><i class="bi bi-geo-alt"></i> Locais de Participação</a>
              <a class="nav-link d-flex align-items-center gap-2" href="galeriaeventoscongressos.html"><i class="bi bi-image"></i> Galeria de Eventos/Congressos</a>
            </div>

            <a class="nav-link d-flex align-items-center gap-2" href="projetos.html"><i class="bi bi-kanban"></i> Projetos</a>
            <a class="nav-link d-flex align-items-center gap-2" href="publicacoes.html"><i class="bi bi-journal-text"></i> Publicações</a>
            <a class="nav-link d-flex align-items-center gap-2" href="eventos.html"><i class="bi bi-calendar-event-fill"></i> Eventos Futuros</a>
            <a class="nav-link d-flex align-items-center gap-2" href="sobre.html"><i class="bi bi-info-circle-fill"></i> Sobre</a>
            <a class="nav-link d-flex align-items-center gap-2" href="contato.html"><i class="bi bi-envelope-fill"></i> Contato</a>
          </nav>

          <!-- Rodapé -->
          <div class="p-3 text-center border-top mt-2">
            <div id="dataHora" class="fs-6 mb-2" style="font-size: 15px; color: #ffffff; font-weight: 500;"></div>
            <h6 class="p-1 text-center text-white">Local de Vínculo</h6>  
            <img src="imagens/logo_ifsp_jcr.jpg" alt="IFSP" style="border-radius: 10%; max-width: 100px;" class="img-fluid">
          </div>
        </div>
      </div>
    `;

    /* === Marca o item ativo === */
    const currentPage = window.location.pathname.split("/").pop();
    const links = this.querySelectorAll(".nav-link");
    links.forEach(link => {
      const href = link.getAttribute("href");
      if (href && href === currentPage) {
        link.classList.add("active");
        const submenu = link.closest(".collapse");
        if (submenu) {
          submenu.classList.add("show");
          const parentLink = this.querySelector(`[data-bs-target="#${submenu.id}"]`);
          if (parentLink) parentLink.classList.add("active");
        }
      }
    });

    /* === Relógio === */
    const campoHora = this.querySelector("#dataHora");
    if (campoHora) {
      const atualizarRelogio = () => {
        const agora = new Date();
        campoHora.innerHTML = `📅 ${agora.toLocaleDateString("pt-BR")} ⏰ ${agora.toLocaleTimeString("pt-BR")}`;
      };
      atualizarRelogio();
      setInterval(atualizarRelogio, 1000);
    }

    /* === Controle do menu (mobile/tablet) === */
    const offcanvasMenu = this.querySelector("#menuOffcanvas");
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasMenu);
    const garantirMenuFechado = () => { if (window.innerWidth <= 992) bsOffcanvas.hide(); };
    const fecharMenuMobile = () => { if (window.innerWidth <= 992 && offcanvasMenu.classList.contains("show")) bsOffcanvas.hide(); };

    window.addEventListener("load", garantirMenuFechado);
    window.addEventListener("resize", fecharMenuMobile);
    window.addEventListener("orientationchange", fecharMenuMobile);
  }
}

customElements.define("meu-menu", MeuMenu);
