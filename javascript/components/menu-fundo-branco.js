class MeuMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- Botão Toggle -->
    <button class="btn" id="menu-toggle-btn" data-bs-toggle="offcanvas" data-bs-target="#menuOffcanvas" aria-controls="menuOffcanvas">
      <i class="bi bi-list" id="menu-icon" style="font-size: 1.5rem;"></i>
    </button>

    <!-- Menu lateral -->
    <div class="offcanvas offcanvas-start" tabindex="0" id="menuOffcanvas" aria-labelledby="menuOffcanvasLabel">
      <div class="offcanvas-header d-flex align-items-center justify-content-between">
        <figure style="text-align: center;">
        <img src="imagens/nome-mind.jpg" alt="MIND" 
         style="max-width: 150px; border-radius: 10%;" class="me-2">
          <figcaption style="font-size: 16px; color: #555; margin-top: 0px;">
          Grupo de Pesquisa em Neurodiversidade
          </figcaption>
        </figure>
       </div>

      <div class="offcanvas-body p-0 d-flex flex-column justify-content-between">
        <nav class="nav flex-column px-3" id="meuMenu">
          <a class="nav-link d-flex align-items-center gap-2" href="home.html"><i class="bi bi-house-door-fill"></i> Início</a>
<br>          
	<a class="nav-link d-flex align-items-center gap-2 btn btn-danger border border-4 border-danger" href="equipeatual.html" id="equipeatual">
   <i class="bi bi-envelope-fill"></i> Equipe Atual</a>
	        
 <a class="nav-link d-flex align-items-center gap-2" href="publicacoes.html"><i class="bi bi-journal-text"></i> Publicações</a>
          <a class="nav-link d-flex align-items-center gap-2" href="projetos.html"><i class="bi bi-kanban-fill"></i> Projetos</a>

          <a class="nav-link d-flex align-items-center gap-2" data-bs-toggle="collapse" href="#submenuAutores" role="button" aria-expanded="false" aria-controls="submenuAutores">
            <i class="bi bi-people-fill"></i> Autores <i class="bi bi-caret-down ms-auto"></i>
          </a>
          <div class="collapse ps-4" id="submenuAutores">
            <a class="nav-link d-flex align-items-center gap-2 small" href="publicacoesautores.html"><i class="bi bi-file-earmark-text"></i> Publicações por Autores</a>
            <a class="nav-link d-flex align-items-center gap-2 small" href="autores.html"><i class="bi bi-person-vcard"></i> Lista de Autores</a>
            <a class="nav-link d-flex align-items-center gap-2 small" href="galeriaautores.html"><i class="bi bi-collection-play-fill"></i> Galeria de Autores</a>
          </div>

          <a class="nav-link d-flex align-items-center gap-2" href="eventos.html"><i class="bi bi-calendar2-event-fill"></i>Eventos Futuros</a>
          <a class="nav-link d-flex align-items-center gap-2" href="galeriaeventoscongressos.html">
              <i class="bi bi-images"></i> Participação Congressos e Eventos
          </a>
          <a class="nav-link d-flex align-items-center gap-2" href="sobre.html"><i class="bi bi-info-circle-fill"></i> Sobre</a>
          <a class="nav-link d-flex align-items-center gap-2" href="contato.html"><i class="bi bi-envelope-fill"></i> Contato</a>

        </nav>

        <div class="p-3 text-center">
          <div id="dataHora" class="text-dark fs-6 mb-2"></div>
              <h6 class="p-1 text-center border-top">Local de Vínculo</h6>  
          <img src="imagens/logo_ifsp_jcr.jpg" alt="IFSP" style="border-radius: 10%; max-width: 100px;" class="img-fluid">
        </div>
      </div>
    </div>

    <style>
html, body {
  height: 100%;
  margin: 0;
}

#page-wrapper {
  max-width: 100%;
  max-height: 90%;
  margin: auto; /* centraliza horizontal e vertical */
  overflow: auto; /* ativa scroll se o conteúdo for maior */
}

meu-menu .offcanvas {
  /*position: relative;  necessário para o pseudo-elemento */
/*  background: linear-gradient(180deg, rgba(247, 247, 247, 0.9), rgba(14, 129, 3, 0.9),  rgba(12, 12, 12, 0.9), rgba(12, 12, 12, 0.9), rgba(247, 247, 247, 0.9));*/
  

box-shadow: 3px 0 15px rgba(7, 0, 0, 1);
  transition: all 0.3s;
 /* overflow: hidden;*/
  
  position: fixed;   /* fixa na lateral */
  top: 0;
  left: 0;
  height: 100vh;
  width: 260px;      /* largura fixa */
  min-width: 260px;  /* não diminui */
  max-width: 260px;  /* não aumenta */
  overflow-y: auto;  /* se o conteúdo passar, cria scroll */
}

meu-menu .offcanvas::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('imagens/ifsp_fundo_menu.png') no-repeat center center;
  background-size: 75% auto; /* A imagem de funda no MENU ocupa 60% da largura, altura proporcional */
  opacity: 0.3; /* transparência da imagem de fundo do menu*/
  z-index: 0; /* atrás do conteúdo */
}

/* Conteúdo do menu fica acima da imagem */
meu-menu .offcanvas-body {
  position: relative;
  z-index: 1;
}

      /* Botão fixo */
      meu-menu #menu-toggle-btn {
        position: fixed;
        top: 15px;
        left: 15px;
        z-index: 1050;
        background-color: #0019f7ff;
        color: #ffffffff;
        border-radius: 50%;
        padding: 0.75rem;
        box-shadow: 0 4px 10px rgba(9, 56, 185, 0.85);
        transition: all 0.3s;
      }
      meu-menu #menu-toggle-btn:hover {
        background-color: #f0f0f0;
        color: #000000;
        transform: scale(1.1);
      }

      /* Offcanvas */
      meu-menu .offcanvas {
       /* background-color: #ffffff;*/
        box-shadow: 3px 0 15px rgba(0, 0, 0, 0.15);
        width: 260px;
      }

      /* Links */
      meu-menu #meuMenu .nav-link {
        color: #ffffffff;
        padding: 0.85rem 1rem;
        border-radius: 12px;
        transition: all 0.3s ease-in-out;
        /*font-weight: bold;*/
        font-size: 14px;
        opacity: 0.85; /* transparência da imagem de fundo do menu*/
        background-color: #030303;
        transition: background 0.2s;
      }
      meu-menu #meuMenu .nav-link:hover {
        background-color: #1612fcff;
        transform: translateX(6px);
      }
      meu-menu #meuMenu .nav-link.active {
        background-color: #ff7f00;
        color: #000000;
        font-weight: bold;
        border-left: 4px solid #cc6600;
      }

      
/* ===== Botão toggle do menu ===== */
#menu-toggle-btn {
  position: fixed;
  top: 5px;
  left: 10px;
  z-index: 1051;
  background-color: #0d6efd;
  border: none;
  color: white;
  padding: 10px 12px;
  font-size: 20px;
  border-radius: 3px;
  cursor: pointer;
  display: none;
}


/* ===== Menu lateral ===== */
#menuOffcanvas {
  width: 220px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#meuMenu .nav-link {
  padding: 10px 15px;
  font-size: 1rem;
  color: white;
  transition: background 0.2s;
}

#meuMenu .nav-link:hover,
#meuMenu .nav-link.active {
  background-color: #0d6efd;
  color: white;
  font-weight: bold;
}

/* ===== Menu fixo em telas grandes ===== *//* ===== Menu fixo em telas grandes ===== */
@media (min-width: 992px) { /* desktops */
  .offcanvas-start {
    position: fixed !important;
    transform: none !important;
    visibility: visible !important;
    height: 100vh;
    top: 0;
    left: 0;
    width: 240px; /* largura fixa */
    max-width: 240px;
    min-width: 240px; 
    border-right: 1px solid #ddd;
    background-color: #fff;
    z-index: 1040;
    overflow-y: auto;
  }

  .offcanvas-backdrop {
    display: none !important;
  }

  #menu-toggle-btn {
    display: none !important;
  }

  body {
    padding-left: 240px; /* afasta conteúdo */
  }
    /* opcional: limitar a largura do conteúdo em telas MUITO grandes */
  main, .container, .content-wrapper {
    max-width: 1200px; /* centraliza e não deixa o texto esticado */
    margin: 0 auto;
  }
}

/* ===== Telas médias (tablets) ===== */
@media (min-width: 769px) and (max-width: 991px) {
  .offcanvas-start {
    width: 30%;  /* proporcional */
    min-width: 200px; /* não fica pequeno demais */
    max-width: 260px; /* não estica demais */
  }

  body {
    padding-left: 30%;
  }
}

/* ===== Telas pequenas (mobile) ===== */
@media (max-width: 768px) {
  .offcanvas-start {
    width: 80%;  /* ocupa a maior parte */
    max-width: 320px;
  }
}

.offcanvas-start .nav-link {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  font-size: 0.95rem;
  border-radius: 6px;
  margin: 4px 8px;
  transition: background 0.3s ease;
}

.offcanvas-start .nav-link:hover,
.offcanvas-start .nav-link.active {
  background-color: #f0f0f0;
}
@media (min-width: 1024px) {
  main, .container, .content-wrapper {
    max-width: 1200px; /* ou 1000px para mais compacto */
    margin: 0 auto; /* centraliza */
  }
}

      /* Responsivo */
      @media (max-width: 576px) {
        meu-menu .offcanvas {
          width: 220px;
        }
        meu-menu #meuMenu .nav-link {
          font-size: 0.9rem;
          padding: 0.7rem 1rem;
        }
      }


      /* ======= Responsividade geral ======= */
        @media (max-width: 992px) {
          .offcanvas { width: 80% !important; }
        }

        @media (max-width: 768px) {
          #menu-toggle-btn {
            top: 10px;
            left: 10px;
            padding: 5px 8px;
          }
          .offcanvas { width: 90% !important; }
          .submenu .nav-link { font-size: 14px; }
        }

        @media (max-width: 480px) {
          #menu-toggle-btn i { font-size: 1.4rem; }
          .offcanvas { width: 100% !important; }
          figcaption { font-size: 14px !important; }
          #dataHora { font-size: 13px !important; }
        }

        /* ============================================================
           AJUSTES POR ORIENTAÇÃO E RESOLUÇÃO (RETRATO / PAISAGEM)
        ============================================================ */

        /* ===== ORIENTAÇÃO: RETRATO (VERTICAL) ===== */

        /* Celulares em pé */
        @media screen and (max-width: 768px) and (orientation: portrait) {
          .imagem-unica-inicio {
            width: 200px;
            height: 200px;
          }
          #menu-toggle-btn {
            top: 10px;
            left: 10px;
          }
        }

        /* Tablets em pé */
        @media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {
          .imagem-unica-inicio {
            width: 260px;
            height: 260px;
          }
          #menu-toggle-btn {
            top: 15px;
            left: 15px;
          }
        }

        /* Monitores grandes em pé */
        @media screen and (min-width: 1025px) and (orientation: portrait) {
          .imagem-unica-inicio {
            width: 300px;
            height: 300px;
          }
          #menu-toggle-btn {
            top: 20px;
            left: 20px;
          }
        }

        /* ===== ORIENTAÇÃO: PAISAGEM (HORIZONTAL) ===== */

        /* Celulares deitados */
        @media screen and (max-width: 768px) and (orientation: landscape) {
          .imagem-unica-inicio {
            width: 150px;
            height: 150px;
          }
          #menu-toggle-btn {
            top: 5px;
            left: 5px;
          }
        }

        /* Tablets deitados */
        @media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
          .imagem-unica-inicio {
            width: 220px;
            height: 220px;
          }
          #menu-toggle-btn {
            top: 10px;
            left: 10px;
          }
        }

        /* Monitores e notebooks (paisagem padrão) */
        @media screen and (min-width: 1025px) and (orientation: landscape) {
          .imagem-unica-inicio {
            width: 280px;
            height: 280px;
          }
          #menu-toggle-btn {
            top: 20px;
            left: 20px;
          }
        }
    </style>

    <script>
      // Troca ícone do botão menu
      const menuIcon = document.getElementById('menu-icon');
      const menuToggleBtn = document.getElementById('menu-toggle-btn');
      menuToggleBtn.addEventListener('click', () => {
        menuIcon.classList.toggle('bi-x-lg');
        menuIcon.classList.toggle('bi-list');
      });

      // Atualiza data/hora
      setInterval(() => {
        const agora = new Date().toLocaleString('pt-BR');
        document.getElementById('dataHora').innerText = agora;
      }, 1000);

      // Marca link ativo
      const links = document.querySelectorAll('#meuMenu a');
      links.forEach(link => {
        if (link.href === window.location.href) {
          link.classList.add('active');
        }
      });
    </script>
    `;
    
    // Ativa página atual
    const links = this.querySelectorAll('.nav-link');
    const paginaAtual = window.location.pathname.split('/').pop();
    links.forEach(link => {
      if (link.getAttribute('href') === paginaAtual) {
        link.classList.add('active');
      }
    });

    // Ativa página atual subpágina
    document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop(); // exemplo: publicacoesautores.html
    const submenus = document.querySelectorAll(".collapse");

    submenus.forEach(submenu => {
      const links = submenu.querySelectorAll("a.nav-link");

      links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active"); // marca o submenu atual
          submenu.classList.add("show"); // abre o submenu

          // marca também o link pai
          const parentLink = document.querySelector(`[href="#${submenu.id}"]`);
          if (parentLink) {
            parentLink.classList.add("active");
          }
        }
      });
    });
  });
 
 // Função de relógio
    function atualizarRelogio() {
      const agora = new Date();
      const dia = agora.getDate().toString().padStart(2, '0');
      const mes = (agora.getMonth() + 1).toString().padStart(2, '0');
      const ano = agora.getFullYear();
      const horas = agora.getHours().toString().padStart(2, '0');
      const minutos = agora.getMinutes().toString().padStart(2, '0');
      const segundos = agora.getSeconds().toString().padStart(2, '0');

      const data = `${dia}/${mes}/${ano}`;
      const hora = `${horas}:${minutos}:${segundos}`;
      const campo = this.querySelector('#dataHora');
      if (campo) campo.innerHTML = `📅 ${data}<br>⏰ ${hora}`;
    }

    setInterval(atualizarRelogio.bind(this), 1000);
    atualizarRelogio.call(this);
  }
}
customElements.define('meu-menu', MeuMenu);