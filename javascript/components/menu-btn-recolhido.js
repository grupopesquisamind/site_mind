
class MeuMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Menu Lateral Web Component</title>

<!-- Bootstrap 5 CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" rel="stylesheet">

<style>
html, body {
  height: 100%;
  margin: 0;
}

#page-wrapper {
  max-width: 100%;
  max-height: 90%;
  margin: auto;
  overflow: auto;
}

meu-menu .offcanvas {
  box-shadow: 3px 0 15px rgba(7, 0, 0, 1);
  transition: all 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 260px;
  min-width: 260px;
  max-width: 260px;
  overflow-y: auto;
  background-color: #030303;
}

meu-menu .offcanvas::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('imagens/ifsp_fundo_menu.png') no-repeat center center;
  background-size: 75% auto;
  opacity: 0.3;
  z-index: 0;
}

meu-menu .offcanvas-body {
  position: relative;
  z-index: 1;
}

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
  cursor: pointer;
}

meu-menu #menu-toggle-btn:hover {
  background-color: #f0f0f0;
  color: #000000;
  transform: scale(1.1);
}

meu-menu #meuMenu .nav-link {
  color: #ffffffff;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  font-size: 14px;
  opacity: 0.85;
  background-color: #030303;
  transition: all 0.3s ease-in-out;
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

@media (max-width: 992px) {
  meu-menu .offcanvas {
    width: 220px;
  }
  meu-menu #menu-toggle-btn {
    display: block;
  }
}
</style>
</head>
<body>




      <button id="menu-toggle-btn"><i class="bi bi-list"></i></button>
      <div class="offcanvas">
        <div class="offcanvas-body p-0">
          <nav class="nav flex-column px-3" id="meuMenu">
            <a class="nav-link d-flex align-items-center gap-2" href="index.html"><i class="bi bi-house-door-fill"></i> Início</a>
            <a class="nav-link d-flex align-items-center gap-2 btn btn-danger border border-4 border-danger" href="equipeatual.html"><i class="bi bi-envelope-fill"></i> Equipe Atual</a>
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
            <a class="nav-link d-flex align-items-center gap-2" href="eventos.html"><i class="bi bi-calendar2-event-fill"></i> Eventos Futuros</a>
            <a class="nav-link d-flex align-items-center gap-2" href="galeriaeventoscongressos.html"><i class="bi bi-images"></i> Participação Congressos e Eventos</a>
            <a class="nav-link d-flex align-items-center gap-2" href="sobre.html"><i class="bi bi-info-circle-fill"></i> Sobre</a>
            <a class="nav-link d-flex align-items-center gap-2" href="contato.html"><i class="bi bi-envelope-fill"></i> Contato</a>
          </nav>
        </div>
      </div>
      </body>
    `;

    const offcanvas = this.querySelector('.offcanvas');
    const btnToggle = this.querySelector('#menu-toggle-btn');

    btnToggle.addEventListener('click', () => {
      offcanvas.classList.toggle('show');
    });

    // Fechar submenu ao clicar fora (opcional)
    document.addEventListener('click', (e) => {
      if (!this.contains(e.target)) {
        offcanvas.classList.remove('show');
      }
    });
  }
}

customElements.define('meu-menu', MeuMenu);

