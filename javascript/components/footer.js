class MeuFooter extends HTMLElement {
  async connectedCallback() {

    const ano = new Date().getFullYear();
    const ultimaAtualizacao = '14/08/2026';
    const versao = 'v1.2.0';
    const hoje = new Date().toISOString().split('T')[0];
    const caminhoAtual = window.location.pathname;

    const ehPaginaPrincipal =
      caminhoAtual === '/' ||
      caminhoAtual.endsWith('/index.html') ||
      caminhoAtual.endsWith('/site_mind/') ||
      caminhoAtual.endsWith('/site_mind/index.html');

    if (ehPaginaPrincipal) {
      const ultimaVisita = localStorage.getItem('visitaHoje');

      if (ultimaVisita !== hoje) {
        try {
          await fetch('/api/registrar-acesso', { method: 'POST' });
          localStorage.setItem('visitaHoje', hoje);
        } catch (e) {
          console.warn('Falha ao registrar acesso:', e);
        }
      }
    }

    let totalAcessos = '---';

    try {
      const res = await fetch('/api/total-acessos');
      const data = await res.json();
      totalAcessos = data.total || 0;
    } catch (e) {
      console.warn('Falha ao obter total de acessos:', e);
    }

    this.innerHTML = `

<style>

/* FOOTER 

topo → 15px  direita → 50px  baixo → 20px esquerda → 30px
*/

.footer{
background:#1c232b;
color:#ffffff;
padding:15px 90px 20px 50px;
font-size:14px;
width:100%;

}

.footer-container{
display:flex;
justify-content:space-between;
align-items:flex-start;
flex-wrap:wrap;
}

.footer-esquerda{
text-align:left;
}

.footer-direita{
text-align:right;
}

.footer p{
margin:4px 0;
}

.footer a{
color:#4db5ff;
text-decoration:none;
}

.footer a:hover{
text-decoration:underline;
}

/* RESPONSIVO */

@media (max-width:700px){

.footer-container{
flex-direction:column;
gap:10px;
text-align:center;
}

.footer-esquerda,
.footer-direita{
text-align:center;
}

}

</style>

<footer class="footer">

<div class="footer-container">

<div class="footer-esquerda">

<p>
© 2022 - ${ano} <b>MIND - Movimento para Inclusão e Neurodiversidade</b>
</p>

<p>
🧠 Grupo de Pesquisa em Educação, Inclusão e Neurodiversidade
</p>

<p>
📧 Contato:
<a href="mailto:grupopesquisamind@gmail.com">
grupopesquisamind@gmail.com
</a>
</p>

</div>

<div class="footer-direita">

<p><b>Desenvolvido por MIND</b></p>

<p>
Última atualização:
<span class="data">${ultimaAtualizacao}</span>
</p>

<p>
Responsável:
<span class="responsavel">
Alexssandro Ferreira (Técnico de Tecnologia da Informação)
</span>
</p>

</div>

</div>

</footer>
`;
  }
}

customElements.define('meu-footer', MeuFooter);
