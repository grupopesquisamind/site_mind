class MeuMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Botão Toggle -->
      <button class="btn py-1" id="menu-toggle-btn" data-bs-toggle="offcanvas" data-bs-target="#menuOffcanvas" aria-controls="menuOffcanvas">
        <i class="bi bi-list" id="menu-icon" style="font-size: 1.5rem;"></i>
      </button>

      <!-- Menu lateral -->
      <div class="offcanvas offcanvas-start py-3" tabindex="0" id="menuOffcanvas" aria-labelledby="menuOffcanvasLabel">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
          <figure style="text-align:center; width:100%;">
            <img src="imagens/nome-mind.jpg" alt="MIND" 
              style="max-width: 150px; border-radius: 10%;" class="me-2">
            <figcaption style="font-size: 16px; color: #fffbfbff; margin-top: 0px;">
              Grupo de Pesquisa em Neurodiversidade
            </figcaption>
          </figure>
        </div>

        <div class="offcanvas-body p-0 d-flex flex-column justify-content-between">
          <nav class="nav flex-column px-3" id="meuMenu">
            <a class="nav-link d-flex align-items-center gap-2" href="home.html"><i class="bi bi-house-door-fill"></i> Início</a>
            <a class="nav-link d-flex align-items-center gap-2 border border-4 border-white" href="equipeatual.html"><i class="bi bi-people-fill"></i> Equipe Atual</a>
            <a class="nav-link d-flex align-items-center gap-2" href="menucongressos.html"><i class="bi bi-calendar2-event"></i>Congressos</a>
            <a class="nav-link d-flex align-items-center gap-2" href="publicacoes.html"><i class="bi bi-journal-text"></i> Publicações</a>
            <a class="nav-link d-flex align-items-center gap-2" href="projetos.html"><i class="bi bi-kanban-fill"></i> Projetos</a>
            <a class="nav-link d-flex align-items-center gap-2" href="eventos.html"><i class="bi bi-calendar2-event"></i> Eventos/Congressos</a>
            <a class="nav-link d-flex align-items-center gap-2" href="autores.html"><i class="bi bi-person-vcard"></i> Autores</a>
            <a class="nav-link d-flex align-items-center gap-2 small" href="publicacoesautores.html"><i class="bi bi-file-earmark-text"></i> Publicações/Autores</a>
            <a class="nav-link d-flex align-items-center gap-2 small" href="galeriaautores.html"><i class="bi bi-collection-play-fill"></i> Galeria/Autores</a>
            <a class="nav-link d-flex align-items-center gap-2 small" href="galeriaeventoscongressos.html"><i class="bi bi-collection-play-fill"></i> Galeria/Congressos</a>
            <a class="nav-link d-flex align-items-center gap-2" href="sobre.html"><i class="bi bi-info-circle-fill"></i> Sobre</a>
            <a class="nav-link d-flex align-items-center gap-2" href="contato.html"><i class="bi bi-envelope-fill"></i> Contato</a>
          </nav>

          <div class="p-3 text-center">
            <div id="dataHora" class="text-white fs-6 mb-2"></div>
            <h6 class="p-1 text-center border-top">Local de Vínculo</h6>  
            <img src="imagens/logo_ifsp_jcr.jpg" alt="IFSP" style="border-radius:10%;max-width:100px;" class="img-fluid">
          </div>
        </div>
      </div>

      <style>
        meu-menu {
          position: relative;
          z-index: 1051;
        }

        /* ======= BOTÃO ======= */
        #menu-toggle-btn {
          position: fixed;
          top: 15px;
          left: 15px;
          z-index: 1060;
          background-color: #0019f7ff;
          color: #fff;
          border-radius: 50%;
          padding: 0.75rem;
          box-shadow: 0 4px 10px rgba(9, 56, 185, 0.85);
          transition: all 0.3s;
        }

        #menu-toggle-btn:hover {
          background-color: #f0f0f0;
          color: #000;
          transform: scale(1.1);
        }

        /* ======= MENU ======= */
        .offcanvas {
          box-shadow: 3px 0 15px rgba(7, 0, 0, 1);
          width: 240px !important;
          background-color: #212529;
          color: white;
        }

        .offcanvas-body {
          position: relative;
          z-index: 1;
        }

        #meuMenu .nav-link {
          color: #fff;
          padding: 0.8rem 1rem;
          border-radius: 8px;
          font-size: 14px;
          background-color: #030303;
          transition: all 0.3s;
          margin-bottom: 2px;
        }

        #meuMenu .nav-link:hover {
          background-color: #1612fcff;
          transform: translateX(6px);
        }

        #meuMenu .nav-link.active {
          background-color: #ff7f00;
          color: #000;
          font-weight: bold;
        }

        /* ======= DESKTOP FIXO ======= */
        @media (min-width: 992px) {
          .offcanvas-start {
            position: fixed !important;
            transform: none !important;
            visibility: visible !important;
            height: 100vh;
            top: 0;
            left: 0;
            width: 240px;
          }
          .offcanvas-backdrop {
            display: none !important;
          }
          #menu-toggle-btn {
            display: none !important;
          }
          /* o segredo: empurra o conteúdo da direita */
          body {
            margin-left: 240px !important;
          }
        }

        /* ======= MOBILE ======= */
        @media (max-width: 991px) {
          .offcanvas {
            width: 80% !important;
          }
          body {
            margin-left: 0 !important;
          }
        }
      </style>
    `;

    // ========= Scripts internos =========
    const icon = this.querySelector('#menu-icon');
    const toggleBtn = this.querySelector('#menu-toggle-btn');
    const dataHoraEl = this.querySelector('#dataHora');

    // alternar ícone do botão
    toggleBtn.addEventListener('click', () => {
      icon.classList.toggle('bi-x-lg');
      icon.classList.toggle('bi-list');
    });

    // atualizar relógio
    const atualizarHora = () => {
      const agora = new Date();
      const data = agora.toLocaleDateString('pt-BR');
      const hora = agora.toLocaleTimeString('pt-BR');
      dataHoraEl.innerHTML = `📅 ${data}<br>⏰ ${hora}`;
    };
    setInterval(atualizarHora, 1000);
    atualizarHora();

    // destacar página ativa
    const links = this.querySelectorAll('.nav-link');
    const atual = window.location.pathname.split('/').pop();
    links.forEach(link => {
      if (link.getAttribute('href') === atual) {
        link.classList.add('active');
      }
    });

    // ✅ === Ajuste automático quando o Google Tradutor adiciona a barra ===
    const ajustarEspacoTradutor = () => {
      const banner = document.querySelector('.goog-te-banner-frame');
      const body = document.body;
      const menuBtn = document.querySelector('#menu-toggle-btn');

      if (banner) {
        const altura = banner.offsetHeight || 40;
        body.style.transition = 'margin-top 0.3s ease';
        body.style.marginTop = `${altura}px`;
        if (menuBtn) menuBtn.style.top = `${15 + altura}px`;
      } else {
        body.style.marginTop = '0';
        if (menuBtn) menuBtn.style.top = '15px';
      }
    };
    setInterval(ajustarEspacoTradutor, 1000);
  }
}
customElements.define('meu-menu', MeuMenu);
