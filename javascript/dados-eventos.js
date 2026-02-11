
function listarItens(chave) {
  if (chave === 'eventos') {
    return [
       {
        id: "1",
        status: "Evento Encerrado",
        titulo: "XIII Encontro Paulista de Pesquisa em Ensino de Química",
        data: "17 a 19 de setembro de 2025",
        tema: "Educação Química em contexto Histórico-Político-Social",
        sediadoPor: "Departamento de Química e Bioquímica da Faculdade de Ciências Tecnologia da UNESP, Campus Presidente Prudente.",
        local: "Presidente Prudente / SP",
        link: "https://portal.sbenq.org.br/eppeq/",
        imagem: 'imagens/eventos/divulgacao_participacao/13_EPPEQ_2025.png',
        submissao: "já encerrado o prazo"
       },
      {
        id: "2",
        status: "Evento Encerrado",
        titulo: "9° Encontro Nacional de Aprendizagem Significativa",
        data: "17 a 21 de novembro de 2025",
        tema: "Discutir estudos fundamentados na Teoria da Aprendizagem Significativa (TAS), nas perspectivas tradicional e contemporânea, e seu impacto no processo da aprendizagem efetivada em contextos formais e não formais de ensino.",
        sediadoPor: "Universidade do Vale do Taquari - Univates",
        local: "Lajeado / RS",
        link: "https://www.univates.br/evento/9-enas",
        imagem: 'imagens/eventos/divulgacao_participacao/9_Encontro_Nacional_ Aprendizagem_Significativa_2025.png',
        submissao: "já encerrado o prazo"
      },
       {
        id: "3",
        status: "Evento para Inscrição",
        titulo: "X ENEBIO e X EREBIO",
        data: "24 a 27 de agosto de 2026",
        tema: "Ensino de Biologia e cidadania: doálogos entre vida, ciência e democracia.",
        sediadoPor: "A definir e acompanhar pelo site de divulgação",
        local: "João Pessoa / PB",
        link: "https://enebio.com.br/",
        imagem: 'imagens/eventos/divulgacao_participacao/10_enebio_2026.png',
        submissao: "20/10/2025 a 09/02/2026"
      },
           
    ];
  }
  return [];
}

//Adicionada lógica condicional no JavaScript para aplicar estilo dinâmico conforme o item.status:
//🔴 "Evento Encerrado" → texto vermelho
//🔵 "Evento em Andamento" → texto azul
//⚫🟡 "Evento para Inscrição" → fundo preto, texto amarelo, destaque