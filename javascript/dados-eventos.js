
function listarItens(chave) {
  if (chave === 'eventos') {
    return [
    /* {
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
        status: "Evento ocorrerá em breve",
        titulo: "X ENEBIO e X EREBIO",
        data: "24 a 27 de agosto de 2026",
        tema: "Ensino de Biologia e cidadania: doálogos entre vida, ciência e democracia.",
        sediadoPor: "Universidade Federal da Paraíba",
        local: "João Pessoa / PB",
        link: "https://enebio.com.br/",
        imagem: 'imagens/eventos/divulgacao_participacao/10_enebio_2026.png',
        submissao: "09/09/2025 a 28/02/2026"
      }
        */
       {
        id: "4",
        status: "Evento ocorrerá em breve",
        titulo: "6º CAIE 2026 - Congresso de Acessibilidade e Inclusão na Educação.",
        data: "25, 26 e 27 de novembro de 2026",
        tema: "APRENDER, ENSINAR E PESQUISAR COM DIVERSIDADE - uma discussão necessária.",
        sediadoPor: "Campus Cubatão do Instituto Federal de Educação, Ciência e Tecnologia",
        local: "Cubatão / SP",
        link: "https://www.caieifsp.com/",
        imagem: 'imagens/eventos/divulgacao_participacao/14_caie_2026.png',
        submissao: "Já encerrado!"
      }
           
    ];
  }
  return [];
}

//Adicionada lógica condicional no JavaScript para aplicar estilo dinâmico conforme o item.status:
// "Evento ocorrerá em breve" -> fundo azul texto branco
//🔴 "Evento Encerrado" → texto vermelho
//🔵 "Evento em Andamento" → texto azul
//⚫🟡 "Evento para Inscrição" → fundo preto, texto amarelo, destaque
