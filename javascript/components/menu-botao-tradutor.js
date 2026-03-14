class MeuMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- ======= BOTÃO TOGGLE ======= -->
      <button class="btn" id="menu-toggle-btn" data-bs-toggle="offcanvas" data-bs-target="#menuOffcanvas" aria-controls="menuOffcanvas">
        <i class="bi bi-list" id="menu-icon" style="font-size: 1.5rem;"></i>
      </button>

      <!-- ======= MENU LATERAL ======= -->
      <div class="offcanvas offcanvas-start" tabindex="0" id="menuOffcanvas" aria-labelledby="menuOffcanvasLabel">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
          <figure style="text-align:center; width:100%;">
            <img src="imagens/nome-mind.jpg" alt="MIND" style="max-width: 150px; border-radius: 10%;" class="me-2">
            <figcaption style="font-size: 16px; color: #fffbfbff; margin-top: 0px;">
              Grupo de Pesquisa em Neurodiversidade
            </figcaption>
          </figure>
        </div>

        <div class="offcanvas-body p-0 d-flex flex-column justify-content-between">
          <!-- ======= LINKS DO MENU ======= -->
          <nav class="nav flex-column px-3" id="meuMenu">
            <a class="nav-link d-flex align-items-center gap-2" href="home.html"><i class="bi bi-house-door-fill"></i> Início</a>
            <a class="nav-link d-flex align-items-center gap-2" href="equipeatual.html"><i class="bi bi-people-fill"></i> Equipe Atual</a>
            <a class="nav-link d-flex align-items-center gap-2" href="menucongressos.html"><i class="bi bi-calendar2-event"></i> Congressos</a>
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

          <!-- ======= RODAPÉ DO MENU ======= -->
          <div class="p-3 text-center border-top">

            <!-- BOTÃO DE TRADUÇÃO -->
            <button id="btnTraduzir" class="btn btn-sm btn-outline-light w-100 d-flex align-items-center justify-content-center gap-2">
              <i class="bi bi-translate"></i> Traduzir Página
            </button>

            <!-- BANDEIRAS -->
            <div id="flagsContainer" class="mt-2" style="display:none;">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flag-icons/css/flag-icons.min.css">
              <div class="d-flex justify-content-center gap-2">
                <span class="fi fi-br" data-lang="pt" title="Português"></span>
                <span class="fi fi-gb" data-lang="en" title="English"></span>
                <span class="fi fi-es" data-lang="es" title="Español"></span>
                <span class="fi fi-fr" data-lang="fr" title="Français"></span>
              </div>
              <div id="google_translate_element" class="mt-2"></div>
            </div>

            <div id="dataHora" class="text-white fs-6 mt-3"></div>
            <h6 class="p-1 text-center border-top">Local de Vínculo</h6>
            <img src="imagens/logo_ifsp_jcr.jpg" alt="IFSP" style="border-radius:10%;max-width:100px;" class="img-fluid">
          </div>
        </div>
      </div>

      <!-- ======= ESTILOS ======= -->
      <style>
        meu-menu { position: relative; z-index: 1051; }

        #menu-toggle-btn {
          position: fixed; top: 15px; left: 15px;
          z-index: 1060;
          background-color: #0019f7ff;
          color: #fff;
          border-radius: 50%;
          padding: 0.75rem;
          box-shadow: 0 4px 10px rgba(9,56,185,0.85);
          transition: all 0.3s;
        }
        #menu-toggle-btn:hover { background-color: #f0f0f0; color: #000; transform: scale(1.1); }

        .offcanvas {
          box-shadow: 3px 0 15px rgba(7,0,0,1);
          width: 240px !important;
          background-color: #212529;
          color: white;
        }

        #btnTraduzir {
          background-color: transparent;
          border: 1px solid #fff;
          transition: 0.3s;
        }
        #btnTraduzir:hover { background-color: #fff; color: #000; }

        #flagsContainer span {
          font-size: 24px;
          cursor: pointer;
          transition: transform 0.2s;
        }
        #flagsContainer span:hover { transform: scale(1.2); }

        #google_translate_element { display: none; }

        @media (min-width: 992px) {
          .offcanvas-start {
            position: fixed !important;
            transform: none !important;
            visibility: visible !important;
            height: 100vh;
            top: 0; left: 0;
            width: 240px;
          }
          .offcanvas-backdrop { display: none !important; }
          #menu-toggle-btn { display: none !important; }
          body { margin-left: 240px !important; }
        }
      </style>
    `;

    // ======== JS INTERNO ========
    const icon = this.querySelector('#menu-icon');
    const toggleBtn = this.querySelector('#menu-toggle-btn');
    const dataHoraEl = this.querySelector('#dataHora');
    const btnTraduzir = this.querySelector('#btnTraduzir');
    const flagsContainer = this.querySelector('#flagsContainer');

    // alternar ícone menu mobile
    toggleBtn.addEventListener('click', () => {
      icon.classList.toggle('bi-x-lg');
      icon.classList.toggle('bi-list');
    });

    // relógio
    const atualizarHora = () => {
      const agora = new Date();
      dataHoraEl.innerHTML = `📅 ${agora.toLocaleDateString('pt-BR')}<br>⏰ ${agora.toLocaleTimeString('pt-BR')}`;
    };
    setInterval(atualizarHora, 1000);
    atualizarHora();

    // destaque página ativa
    const links = this.querySelectorAll('.nav-link');
    const atual = window.location.pathname.split('/').pop();
    links.forEach(link => { if (link.getAttribute('href') === atual) link.classList.add('active'); });

    // botão Traduzir → exibe bandeiras
    btnTraduzir.addEventListener('click', () => {
      flagsContainer.style.display = flagsContainer.style.display === 'none' ? 'block' : 'none';
    });

    // carregar script Google Translate
    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = function() {
      new google.translate.TranslateElement({
        pageLanguage: 'pt',
        includedLanguages: 'pt,en,es,fr',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    };

    // clique nas bandeiras → ativa idioma
    this.addEventListener('click', e => {
      if (e.target.dataset.lang) {
        const lang = e.target.dataset.lang;
        const select = document.querySelector('.goog-te-combo');
        if (select) {
          select.value = lang;
          select.dispatchEvent(new Event('change'));
        }
      }
    });
  }
}
customElements.define('meu-menu', MeuMenu);
