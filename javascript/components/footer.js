class MeuFooter extends HTMLElement {
  connectedCallback() {
    const ano = new Date().getFullYear();
    const ultimaAtualizacao = '08/11/2025';
    const versao = 'v1.0.0';

    this.innerHTML = `
      
    <style>
        .social-link:hover {
          color: #0d6efd !important; /* Azul Bootstrap no hover */
          transform: scale(1.2);
          transition: all 0.3s ease-in-out;
        }

        /* Garante sempre duas linhas no bloco central */
        .footer .col-md-4 p {
          line-height: 1.5;
          display: block;
          width: 100%;
        }

  .icone-social {
  width: 33px;   /* tamanho fixo */
  height: 33px;
  opacity: 0.8;  /* deixa a imagem um pouco transparente */
  border: 2px solid #fff;   /* borda branca */
  border-radius: 50%;       /* arredonda, deixando circular */
  padding: 3px;             /* espaço interno para não cortar */
  transition: transform 0.3s ease-in-out, opacity 0.3s, border-color 0.3s;
}

.social-link:hover .icone-social {
  transform: scale(1.2); /* aumenta levemente */
  opacity: 1;            /* volta a 100% de visibilidade */
  border-color: #0d6efd; /* muda a cor da borda no hover (azul bootstrap) */
}


html, body {
    height: 100%;
    margin: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }


 #page-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1; /* ocupa a altura disponível */
  }

  #page-content-wrapper, main {
    flex: 1; /* faz o conteúdo expandir e empurrar o footer para baixo */
  }

  meu-footer {
    margin-top: auto; /* mantém o footer sempre no final */
  }

</style>

    <footer class="footer bg-dark text-white py-4 mt-auto">
        <div class="container">
          <div class="row align-items-center text-center text-md-start">
            
            <!-- Coluna 1: Ícones sociais 
<div class="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start gap-3">
  <a href="https://instagram.com" target="_blank" class="social-link">
    <i class="bi bi-instagram fs-5 text-primary"></i>
  </a>

  <a href="https://youtube.com" target="_blank" class="social-link">
    <i class="bi bi-youtube fs-5 text-danger"></i>
  </a>
</div>
-->

<!-- Coluna 1: Ícones sociais -->
<div class="col-12 col-md-3 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start gap-3">
  <!-- Instagram -->
  <a href="https://instagram.com" target="_blank" class="social-link">
    <img src="imagens/icones/instagram.png" alt="Instagram" class="icone-social">
  </a>

  <!-- YouTube -->
  <a href="https://youtube.com" target="_blank" class="social-link">
    <img src="imagens/icones/youtube.png" alt="YouTube" class="icone-social">
  </a>

  <!-- LinkedIn -->
  <a href="https://facebook.com" target="_blank" class="social-link">
    <img src="imagens/icones/facebook.png" alt="LinkedIn" class="icone-social">
  </a>
</div>

            <!-- Coluna 2: Texto institucional -->
            <div class="col-12 col-md-5 text-center mb-3 mb-md-0">
              <p class="mb-1">
                &copy; 2022 - ${ano} <strong>MIND</strong> - Movimento para Inclusão e Neurodiversidade
              </p>

<p style="margin: 3px 0; font-size: 14px; color: #ffff;">
        🧠 Grupo de Pesquisa em Educação, Inclusão e Neurodiversidade
      </p>
      <p style="margin: 3px 0;">
        📧 <a href="mailto:grupodepesquisamind@gmail.com" style="color: #5daef0; text-decoration: none;"> <!--#0078d7 -->
         grupopesquisamind@gmail.com
        </a>
      </p>

              </div>

            <!-- Coluna 3: Informações extras -->
              <div class="col-12 col-md-4 text-center text-md-end">
                <h2 class="mb-0 small text-info fw-bold">
                Desenvolvido por 
               <span class="text-white">MIND</span>
                </h2>
              <p class="mb-0">Última atualização: <span class="text-warning">${ultimaAtualizacao}</span></p>
              <!--<p class="mb-0">Versão do sistema: <span class="text-success fw-bold">${versao}</span></p>-->
            </div>

          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('meu-footer', MeuFooter);