class MeuFooter extends HTMLElement {
  async connectedCallback() {
    const ano = new Date().getFullYear();
    const ultimaAtualizacao = '08/11/2025';
    const versao = 'v1.0.0';
    const hoje = new Date().toISOString().split('T')[0];
    const caminhoAtual = window.location.pathname;

    // --- Contagem só na página inicial ---
    const ehPaginaPrincipal = caminhoAtual === '/' || caminhoAtual.endsWith('/index.html') || caminhoAtual.endsWith('/site_mind/') || caminhoAtual.endsWith('/site_mind/index.html');

    if (ehPaginaPrincipal) {
      const ultimaVisita = localStorage.getItem('visitaHoje');
      if (ultimaVisita !== hoje) {
        try {
          await fetch('/api/registrar-acesso', { method: 'POST' });
          localStorage.setItem('visitaHoje', hoje);
        } catch (e) {
          console.warn('⚠️ Falha ao registrar acesso:', e);
        }
      }
    }

    // --- Buscar total de acessos (exibe em todas as páginas) ---
    let totalAcessos = '---';
    try {
      const res = await fetch('/api/total-acessos');
      const data = await res.json();
      totalAcessos = data.total || 0;
    } catch (e) {
      console.warn('⚠️ Falha ao obter total de acessos:', e);
    }

    // --- HTML do footer ---
    this.innerHTML = `
      <style>
        .social-link:hover {
          color: #0d6efd !important;
          transform: scale(1.2);
          transition: all 0.3s ease-in-out;
        }

        .footer .col-md-4 p {
          line-height: 1.5;
          display: block;
          width: 100%;
        }

        .icone-social {
          width: 33px;
          height: 33px;
          opacity: 0.8;
          border: 2px solid #fff;
          border-radius: 50%;
          padding: 3px;
          transition: transform 0.3s ease-in-out, opacity 0.3s, border-color 0.3s;
        }

        .social-link:hover .icone-social {
          transform: scale(1.2);
          opacity: 1;
          border-color: #0d6efd;
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
          flex: 1;
        }

        #page-content-wrapper, main {
          flex: 1;
        }

        meu-footer {
          margin-top: auto;
        }
      </style>

      <footer class="footer bg-dark text-white py-4 mt-auto">
        <div class="container">
          <div class="row align-items-center text-center text-md-start">

            <!-- Coluna 1: Ícones sociais -->
            <div class="col-12 col-md-3 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start gap-3">
              <a href="" target="_blank" class="social-link">
                <img src="imagens/icones/instagram.png" alt="Instagram" class="icone-social">
              </a>
              <a href="" target="_blank" class="social-link">
                <img src="imagens/icones/youtube.png" alt="YouTube" class="icone-social">
              </a>
              <a href="" target="_blank" class="social-link">
                <img src="imagens/icones/facebook.png" alt="Facebook" class="icone-social">
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
                📧 <a href="mailto:grupodepesquisamind@gmail.com" style="color: #5daef0; text-decoration: none;">
                  grupodepesquisamind@gmail.com
                </a>
              </p>
            </div>

            <!-- Coluna 3: Informações extras -->
            <div class="col-12 col-md-4 text-center text-md-end">
              <h2 class="mb-0 small text-info fw-bold">
                Desenvolvido por <span class="text-white">MIND</span>
              </h2>
              <p class="mb-0">Última atualização: <span class="text-warning">${ultimaAtualizacao}</span></p>
              <p class="mb-0">Total de acessos: <span class="text-success fw-bold">${totalAcessos}</span></p>
            </div>

          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('meu-footer', MeuFooter);
