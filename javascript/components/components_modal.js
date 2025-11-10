// ====================================================
// BLOQUEIOS GERAIS NO DOCUMENTO PRINCIPAL
// ====================================================

// Bloquear botão direito
document.addEventListener('contextmenu', e => e.preventDefault());

// Bloquear teclas sensíveis (F12, Ctrl+U, Ctrl+S, Ctrl+C, Ctrl+P)
document.addEventListener('keydown', e => {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && ['u', 'U', 's', 'S', 'c', 'C', 'p', 'P', 'a', 'A'].includes(e.key))
  ) {
    e.preventDefault();
    e.stopPropagation();
  }
});

// Bloquear copiar, colar e cortar no documento principal
['copy', 'cut', 'paste'].forEach(evt =>
  document.addEventListener(evt, e => e.preventDefault())
);

// Bloquear seleção de texto no documento principal
document.addEventListener('selectstart', e => e.preventDefault());

// ====================================================
// FUNÇÃO PARA BLOQUEAR DENTRO DO IFRAME (MESMO DOMÍNIO)
// ====================================================
function aplicarBloqueiosInternos(iframe) {
  try {
    const doc = iframe.contentDocument || iframe.contentWindow.document;

    doc.addEventListener('contextmenu', e => e.preventDefault());
    doc.addEventListener('keydown', e => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && ['u', 'U', 's', 'S', 'c', 'C', 'p', 'P', 'a', 'A'].includes(e.key))
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
    ['copy', 'cut', 'paste'].forEach(evt =>
      doc.addEventListener(evt, e => e.preventDefault())
    );
    doc.addEventListener('selectstart', e => e.preventDefault());

    console.log('🔒 Bloqueios internos aplicados ao iframe.');
  } catch (err) {
    console.warn('⚠️ Iframe externo — bloqueio interno não permitido (CORS).');
  }
}

// ====================================================
// BLOQUEIO EXTERNO COM OVERLAY INVISÍVEL (SE CORS IMPEDIR)
// ====================================================
function aplicarOverlayBloqueio(iframe) {
  const container = iframe.parentElement;
  if (!container.querySelector('.iframe-overlay')) {
    const overlay = document.createElement('div');
    overlay.className = 'iframe-overlay';
    overlay.style.cssText = `
      position: absolute;
      inset: 0;
      z-index: 10;
      background: transparent;
    `;
    container.style.position = 'relative';
    container.appendChild(overlay);

    // Permitir clique dentro do iframe (parcialmente)
    overlay.addEventListener('dblclick', () => {
      overlay.style.pointerEvents = 'none';
      setTimeout(() => (overlay.style.pointerEvents = 'auto'), 5000);
    });
  }
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
