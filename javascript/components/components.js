// protecao-global.js
// Bloqueios globais: botão direito, F12, atalhos de inspeção, copiar/colar/cortar/selecionar/arrastar
// Permite copiar/colar apenas em áreas com .allow-copy ou [data-allow-copy]
// Mas mantém o bloqueio de botão direito e F12 em TODA a página

(function(){

  const ALLOW_SELECTOR = '.allow-copy, [data-allow-copy]';

  // ======== Função para mostrar aviso discreto ========
  function _flash(msg){
    try{
      if(!document || !document.body) return;
      const id = '_prot_flash';
      if(document.getElementById(id)) return;
      const d = document.createElement('div');
      d.id = id;
      d.textContent = msg;
      Object.assign(d.style, {
        position: 'fixed',
        right: '12px',
        bottom: '12px',
        background: 'rgba(0,0,0,0.85)',
        color: '#fff',
        padding: '8px 12px',
        borderRadius: '6px',
        zIndex: 2147483647,
        fontSize: '14px'
      });
      document.body.appendChild(d);
      setTimeout(()=>d.remove(), 1200);
    }catch(e){}
  }

  // ======== Verifica se o evento ocorreu dentro da área permitida ========
  function isInsideAllowed(el){
    return !!(el && el.closest && el.closest(ALLOW_SELECTOR));
  }

  // ======== CSS global ========
  const style = document.createElement('style');
  style.textContent = `
    html, body {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    ${ALLOW_SELECTOR} {
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      user-select: text !important;
    }
  `;
  document.head.appendChild(style);

  // ======== Bloqueio total do botão direito ========
  document.addEventListener('contextmenu', e => {
    e.preventDefault();
    _flash('Botão direito desabilitado');
  }, true);

  // ======== Bloqueios de seleção / arrastar ========
  document.addEventListener('selectstart', e => {
    if(!isInsideAllowed(e.target)) e.preventDefault();
  }, true);

  document.addEventListener('dragstart', e => {
    if(!isInsideAllowed(e.target)) e.preventDefault();
  }, true);

  // ======== Bloqueios de cópia / colar / recortar ========
  document.addEventListener('copy', e => {
    if(!isInsideAllowed(e.target)) {
      e.preventDefault();
      _flash('Cópia desabilitada');
    }
  }, true);

  document.addEventListener('paste', e => {
    if(!isInsideAllowed(e.target)) {
      e.preventDefault();
      _flash('Colar desabilitado');
    }
  }, true);

  document.addEventListener('cut', e => {
    if(!isInsideAllowed(e.target)) {
      e.preventDefault();
      _flash('Recortar desabilitado');
    }
  }, true);

  // ======== Bloqueio de atalhos ========
  document.addEventListener('keydown', e => {
    try {
      const key = (e.key || '').toLowerCase();
      const code = e.keyCode || 0;
      const ctrlOrCmd = e.ctrlKey || e.metaKey;
      const target = e.target;

      // Bloqueia F12 sempre
      if(code === 123 || key === 'f12'){
        e.preventDefault();
        _flash('F12 desabilitado');
        return false;
      }

      // Bloqueia DevTools e atalhos de inspeção sempre
      if(ctrlOrCmd && e.shiftKey && ['i','j','c'].includes(key)){
        e.preventDefault();
        _flash('Ferramentas de desenvolvedor bloqueadas');
        return false;
      }

      // Bloqueia Ctrl+U / Ctrl+S / Ctrl+P sempre
      if(ctrlOrCmd && ['u','s','p'].includes(key)){
        e.preventDefault();
        _flash('Atalho desabilitado');
        return false;
      }

      // Bloqueia copiar/colar/recortar/selecionar fora das áreas liberadas
      if(ctrlOrCmd && ['c','v','x','a'].includes(key)){
        if(!isInsideAllowed(target)) {
          e.preventDefault();
          if(key==='c') _flash('Cópia desabilitada');
          if(key==='v') _flash('Colar desabilitado');
          if(key==='x') _flash('Recortar desabilitado');
          if(key==='a') _flash('Selecionar tudo desabilitado');
          return false;
        }
      }

    } catch(err) {
      console.warn('[PROT] erro no keydown', err);
    }
  }, true);

})();
