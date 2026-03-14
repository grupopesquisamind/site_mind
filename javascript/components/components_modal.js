// ====================================================
// BLOQUEIOS GERAIS NO DOCUMENTO PRINCIPAL
// ====================================================

// Bloquear botão direito
document.addEventListener('contextmenu', e => e.preventDefault());

// Bloquear copiar, colar e cortar no documento principal
['copy', 'cut', 'paste'].forEach(evt =>
  document.addEventListener(evt, e => e.preventDefault())
);

// Bloquear seleção de texto no documento principal
document.addEventListener('selectstart', e => e.preventDefault());

// ====================================================
// FUNÇÃO PARA BLOQUEAR DENTRO DO IFRAME (MESMO DOMÍNIO)
// ====================================================
// ====================================================
// BLOQUEIO COMPLETO NA ÁREA DO IFRAME
// ====================================================
function aplicarProtecaoIframe(iframe) {
  const container = iframe.parentElement;
  container.style.position = 'relative';

  // 🔒 Cria overlay que cobre o iframe (para bloquear botão direito)
  let overlay = container.querySelector('.iframe-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'iframe-overlay';
    overlay.style.cssText = `
      position: absolute;
      inset: 0;
      z-index: 20;
      background: transparent;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      touch-action: manipulation;
    `;
    container.appendChild(overlay);
  }

  // ⚙️ Bloquear botão direito (desktop)
  overlay.addEventListener('contextmenu', e => e.preventDefault());

  // ⚙️ Bloquear gestos de toque múltiplo (pinch zoom, copiar com 2 dedos)
  overlay.addEventListener('touchstart', e => {
    if (e.touches.length > 1) e.preventDefault();
  }, { passive: false });

  // ⚙️ Permitir clique normal e toque (passagem temporária)
  ['click', 'touchstart'].forEach(evt => {
    overlay.addEventListener(evt, () => {
      overlay.style.pointerEvents = 'none';  // libera clique
      setTimeout(() => {
        overlay.style.pointerEvents = 'auto'; // volta a bloquear botão direito
      }, 3000); // 3 segundos livres de clique
    });
  });

  // ⚙️ Bloqueio global de teclado e ações de cópia
    // Bloquear teclas sensíveis (F12, Ctrl+U, Ctrl+S, Ctrl+C, Ctrl+P)

  document.addEventListener('keydown', e => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && ['u','U','s','S','c','C','p','P','a','A'].includes(e.key))
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  // Bloquear teclas sensíveis (F12, Ctrl+U, Ctrl+S, Ctrl+C, Ctrl+P)
  document.addEventListener('copy', e => e.preventDefault());
  document.addEventListener('cut', e => e.preventDefault());
  document.addEventListener('paste', e => e.preventDefault());

  console.log('🛡️ Proteção completa aplicada à área do iframe.');
}


// ====================================================
// MONITORAR O IFRAME E APLICAR BLOQUEIOS
// ====================================================
const iframe = document.getElementById('iframeConteudo');
if (iframe) {
  iframe.addEventListener('load', () => {
    aplicarBloqueiosInternos(iframe);
    aplicarOverlayBloqueio(iframe);
  });
}

// ====================================================
// FUNÇÃO ORIGINAL DE AMPLIAR (SEM ALTERAR FUNCIONALIDADE)
// ====================================================
document.getElementById('btnAmpliar').addEventListener('click', () => {
  const iframe = document.getElementById('iframeConteudo');
  if (iframe && iframe.src) {
    const width = screen.availWidth;
    const height = screen.availHeight;
    const novaJanela = window.open(
      iframe.src,
      '_blank',
      `width=${width},height=${height},top=0,left=0,resizable=yes,scrollbars=yes`
    );
    if (novaJanela) {
      novaJanela.moveTo(0, 0);
      novaJanela.resizeTo(screen.availWidth, screen.availHeight);
      novaJanela.focus();
    }
  }
});
