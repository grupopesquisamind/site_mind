// protecao-global.js
// Bloqueios globais: botão direito, F12, atalhos de inspeção, copiar/colar/cortar/selecionar/arrastar

(function(){

  // pequena função para mostrar mensagem discreta no canto (não intrusiva)
  function _flash(msg){
    try{
      if(!document || !document.body) return;
      var id = '_prot_flash';
      if(document.getElementById(id)) return;
      var d = document.createElement('div');
      d.id = id;
      d.textContent = msg;
      d.style.position = 'fixed';
      d.style.right = '12px';
      d.style.bottom = '12px';
      d.style.background = 'rgba(0,0,0,0.85)';
      d.style.color = '#fff';
      d.style.padding = '8px 12px';
      d.style.borderRadius = '6px';
      d.style.zIndex = 2147483647;
      document.body.appendChild(d);
      setTimeout(function(){ try{ d.remove(); }catch(e){} }, 1200);
    }catch(e){}
  }

  // Bloqueia botão direito
  document.addEventListener('contextmenu', function(e){
    try{ e.preventDefault(); }catch(_){} 
    _flash('Botão direito desabilitado');
  }, true);

  // Bloqueia seleção inicial (selectstart) e arrastar
  document.addEventListener('selectstart', function(e){ try{ e.preventDefault(); }catch(_){} }, true);
  document.addEventListener('dragstart', function(e){ try{ e.preventDefault(); }catch(_){} }, true);

  // Bloqueia eventos de cópia/cola/cortar
  document.addEventListener('copy', function(e){
    try{ e.preventDefault(); }catch(_){} 
    _flash('Cópia desabilitada');
    console.warn('[PROT] copy bloqueado');
  }, true);

  document.addEventListener('paste', function(e){
    try{ e.preventDefault(); }catch(_){} 
    _flash('Colar desabilitado');
    console.warn('[PROT] paste bloqueado');
  }, true);

  document.addEventListener('cut', function(e){
    try{ e.preventDefault(); }catch(_){} 
    _flash('Recortar desabilitado');
    console.warn('[PROT] cut bloqueado');
  }, true);

  // Bloqueia teclas / atalhos
  document.addEventListener('keydown', function(e){
    try {
      var key = (e.key || '').toString().toLowerCase();
      var code = e.keyCode || 0;
      var ctrlOrCmd = e.ctrlKey || e.metaKey; // suporta Mac (Command)

      // F12
      if(code === 123 || key === 'f12'){ e.preventDefault(); e.stopPropagation(); _flash('F12 desabilitado'); return false; }

      // Ctrl/Cmd + Shift + (I / J / C) -> DevTools
      if(ctrlOrCmd && e.shiftKey && (key === 'i' || key === 'j' || key === 'c')){ e.preventDefault(); e.stopPropagation(); _flash('Ferramentas de desenvolvedor bloqueadas'); return false; }

      // Ctrl/Cmd + U (ver fonte), Ctrl/Cmd + S (salvar), Ctrl/Cmd + P (imprimir) - opcional
      if(ctrlOrCmd && (key === 'u' || key === 's' || key === 'p')){ e.preventDefault(); e.stopPropagation(); _flash('Atalho desabilitado'); return false; }

      // Bloquear copiar/colar/recortar via teclado: Ctrl/Cmd + (C / V / X / A)
      if(ctrlOrCmd && (key === 'c' || key === 'v' || key === 'x' || key === 'a')){
        e.preventDefault(); e.stopPropagation();
        if(key === 'c') _flash('Cópia desabilitada');
        if(key === 'v') _flash('Colar desabilitado');
        if(key === 'x') _flash('Recortar desabilitado');
        if(key === 'a') _flash('Selecionar tudo desabilitado');
        console.warn('[PROT] atalho bloqueado:', key);
        return false;
      }

    } catch(err) {
      // silencioso em caso de erro
      console.warn('[PROT] erro em keydown handler', err);
    }
  }, true);

})();
