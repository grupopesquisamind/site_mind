function listarItens(tipo) {
  if (tipo === 'congressos') {
    return [
      { nome: "CAIE", descricao: "Congresso de Acessibilidade de Inclusão na Educação", imagem: "caie.png" },
      { nome: "CIEDUC", descricao: "Congresos Iberoamericanos de Educación Científica", imagem: "cieduc.png" },
      { nome: "CONAPESC", descricao: "Congresso Nacional de Pesquisa e Ensino em Ciências", imagem: "conapesc.jpg" },
      { nome: "CONICT", descricao: "Congresso de Inovação, Ciência e Tecnologia pelo IFSP", imagem: "conict.jpg" },
      { nome: "EPPEQ", descricao: "Encontro Paulista de Pesquisa em Ensino de Química", imagem: "eppeq.png" },
      { nome: "SBENBIO", descricao: "Sociedade Brasileira de Ensino de Biologia", imagem: "sbenbio.png" },
      { nome: "EIAS", descricao: "Encontro Internacional de Aprendizagem Significativa", imagem: "apsignificativa.png" },
      { nome: "ENAS", descricao: "Encontro Nacional de Aprendizagem Significativa", imagem: "enasbanner.png"},
      { nome: "ENEBIO/EREBIO", descricao: "Encontro Nacional de Ensino de Biologia (ENEBIO) e o Encontro Regional de Ensino de Biologia da Regional 5 – Nordeste (EREBIO)", imagem: "10_enebio_2026.png"}

    ];
  }
  return [];
}
