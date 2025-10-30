
function listarItens(chave) {
  if (chave === 'eventos') {
    return [
       {
        status: "Inscrições Abertas",
        titulo: "XIII Encontro Paulista de Pesquisa em Ensino de Química",
        data: "17-19 setembro 2025",
        tema: "Educação Química em contexto Histórico-Político-Social",
        sediadoPor: "Departamento de Química e Bioquímica da Faculdade de Ciências Tecnologia da UNESP, Campus Presidente Prudente.",
        local: "Presidente Prudente",
        link: "https://portal.sbenq.org.br/eppeq/"
      },
      {
        status: "Inscrições Abertas",
        titulo: "Congresso Nacional de Inclusão Escolar",
        data: "15-17 de Julho, 2025",
        tema: "",
        sediadoPor: "",
        local: "São Paulo, SP",
        link: "https://exemplo.com/evento1"
      },
      {
        status: "Inscrições Encerradas",
        titulo: "Curso de Formação em Educação Inclusiva",
        data: "20 de Agosto, 2025",
        tema: "",
        sediadoPor: "",
        local: "Online",
        link: "https://exemplo.com/evento2"
      },
      
    ];
  }
  return [];
}
