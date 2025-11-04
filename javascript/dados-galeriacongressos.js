function listarItens(tipo) {
  if (tipo === 'galeriacongressos') {
    return [
      {imagem: 'imagens/eventos/img/eppeq_2025_grupo.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'Foto do grupo no EPPEQ 2025'},
      {imagem: 'imagens/eventos/img/eppeq_2025.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'Apresentação do Grupo EPPEQ 2025'},
      {imagem: 'imagens/eventos/img/eppeq_2025_grupo_2.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'Apresentação Thiago EPPEQ 2025'},
      {imagem: 'imagens/eventos/img/eppeq_2025_A-C.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'Apresentação de Ana Clara no EPPEQ 2025'},
      {imagem: 'imagens/eventos/img/eppeq_2025_y.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'Apresentação de Yara no EPPEQ 2025'},
      {imagem: 'imagens/eventos/img/eppeq_2025_encerramento.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'Encerramento do EPPEQ 2025'},
    ];
  }
  return [];
}
