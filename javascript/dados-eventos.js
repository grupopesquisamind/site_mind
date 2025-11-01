
function listarItens(chave) {
  if (chave === 'eventos') {
    return [
       {
        status: "Evento Encerrado",
        titulo: "XIII Encontro Paulista de Pesquisa em Ensino de Química",
        data: "17-19 setembro 2025",
        tema: "Educação Química em contexto Histórico-Político-Social",
        sediadoPor: "Departamento de Química e Bioquímica da Faculdade de Ciências Tecnologia da UNESP, Campus Presidente Prudente.",
        local: "Presidente Prudente",
        link: "https://portal.sbenq.org.br/eppeq/"
      },
      {
        status: "Evento em Andamento",
        titulo: "9° Encontro Nacional de Aprendizagem Significativa",
        data: "17 a 21 de novembro de 2025",
        tema: "Discutir estudos fundamentados na Teoria da Aprendizagem Significativa (TAS), nas perspectivas tradicional e contemporânea, e seu impacto no processo da aprendizagem efetivada em contextos formais e não formais de ensino.",
        sediadoPor: "Universidade do Vale do Taquari - Univates",
        local: "Lajeado / RS",
        link: "https://www.univates.br/evento/9-enas"
      },
           
    ];
  }
  return [];
}
