function listarItens(tipo) {
  if (tipo === 'congressos') {
    return [
      { nome: "CAIE", descricao: "Congresso de Acessibilidade de Inclusão na Educação", imagem: "caie.png" },
      { nome: "CIEDUC", descricao: "Congresos Iberoamericanos de Educación Científica", imagem: "cieduc.png" },
      { nome: "CONAPESC", descricao: "Congresso de Iniciação Científica do IFSP Itapetininga", imagem: "conapesc.jpg" },
      { nome: "CONICT", descricao: "Congresso de Inovação, Ciência e Tecnologia pelo IFSP", imagem: "conict.jpg" },
      { nome: "EPPEQ", descricao: "Encontro Paulista de Pesquisa em Ensino de Química", imagem: "eppeq.png" },
      { nome: "SBENBIO", descricao: "Sociedade Brasileira de Ensino de Biologia", imagem: "sbenbio.png" },
      { nome: "EIAS", descricao: "Encontro Internacional de Aprendizagem Significativa", imagem: "apsignificativa.png" }
    ];
  }
  return [];
}
