class MeuMenu extends HTMLElement {

connectedCallback(){

this.innerHTML = `

<header class="topbar">

<div class="logo">
<img src="imagens/nome-mind.jpg" alt="Logo MIND">
<!-- <img src="imagens/" alt="Logo IFSP"> -->
</div>

<div class="menu-toggle">☰</div>

<nav class="menu">

<a href="home.html">Home</a>
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

const toggle = this.querySelector(".menu-toggle");
const menu = this.querySelector(".menu");

toggle.addEventListener("click",()=>{
menu.classList.toggle("active");
});

/* LINK ATIVO */

const links = this.querySelectorAll(".menu a");
const url = window.location.pathname.split("/").pop();

links.forEach(link=>{
if(link.getAttribute("href")===url){
link.classList.add("active");
}
});

}

}

customElements.define("meu-menu", MeuMenu);