class MeuMenu extends HTMLElement {

  connectedCallback(){

    this.innerHTML = `

<header class="topbar">

<div class="logo">
<img src="imagens/nome-mind.jpg" alt="Logo MIND">
</div>

<div class="menu-toggle">☰</div>

<nav class="menu">

<a href="index.html">Home</a>
<a href="equipeatual.html">Equipe Atual</a>
<a href="autores.html">Autores</a>
<a href="publicacoes.html">Publicações</a>
<a href="projetos.html">Projetos</a>
<a href="galeriaeventoscongressos.html">Galeria</a>
<a href="menucongressos.html">Congressos</a>
<a href="eventos.html">Próximos Eventos</a>
<a href="contato.html">Contato</a>
<a href="sobre.html">Sobre</a>

</nav>

</header>
`;

    // MENU MOBILE
    const toggle = this.querySelector(".menu-toggle");
    const menu = this.querySelector(".menu");

    toggle.addEventListener("click",()=>{
      menu.classList.toggle("active");
    });

    // LINK ATIVO (VERSÃO MELHORADA)
    const links = this.querySelectorAll(".menu a");
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
      else if (caminho.includes(href)) {
        link.classList.add("active");
      }
    });

  }

}

customElements.define("meu-menu", MeuMenu);