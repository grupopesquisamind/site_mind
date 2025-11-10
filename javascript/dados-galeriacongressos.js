function listarItens(tipo) {
  if (tipo === 'galeriacongressos') {
    return [
           {imagem: 'imagens/eventos/participacao_publicacao/conict/caie_2022_ryan_ana_paula_bianca_ricardo.jpg', sigla: 'CAIE', ano: '2022', descricao: 'IFSP Cubatão/SP (23 a 25 de Novembro) - Apresentação: Ryan Campos, Ana Paula Kawabe, Ricardo Reis e Bianca Montemor'},

      {imagem: 'imagens/eventos/participacao_publicacao/conict/conict_2022_bianca_ricardo_apresentacao.jpeg', sigla: 'CONICT', ano: '2022', descricao: 'Reitoria IFSP/SP (21 a 23 de Novembro) - Apresentação: Bianca Montemor e Ricardo Reis'},
      {imagem: 'imagens/eventos/participacao_publicacao/conict/conict_2022_bianca_ricardo_apresentacao_2.jpeg', sigla: 'CONICT', ano: '2022', descricao: 'Reitoria IFSP/SP (21 a 23 de Novembro) - Apresentação: Bianca Montemor e Ricardo Reis'},
      {imagem: 'imagens/eventos/participacao_publicacao/conict/conict_2022_bianca_ricardo_apresentacao_3.jpeg', sigla: 'CONICT', ano: '2022', descricao: 'Reitoria IFSP/SP (21 a 23 de Novembro) - Apresentação: Bianca Montemor e Ricardo Reis'},
      {imagem: 'imagens/eventos/participacao_publicacao/conict/conict_2022_bianca_ricardo_apresentacao_4.jpeg', sigla: 'CONICT', ano: '2022', descricao: 'Reitoria IFSP/SP (21 a 23 de Novembro) - Apresentação: Bianca Montemor e Ricardo Reis'},
   
      {imagem: 'imagens/eventos/participacao_publicacao/conict/conict_2023_bianca_montemor_apresentacao.jpg', sigla: 'CONICT', ano: '2023', descricao: 'IFSP Capivari/SP (22 a 24 de Novembro) - Apresentação: Bianca Montemor'},
      {imagem: 'imagens/eventos/participacao_publicacao/conict/conict_2023_gabriel_kawabe_apresentacao.jpg', sigla: 'CONICT', ano: '2023', descricao: 'IFSP Capivari/SP (22 a 24 de Novembro) - Apresentação: Gabriel Kawabe'},
      {imagem: 'imagens/eventos/participacao_publicacao/conict/conict_2023_lucas_caraca_apresentacao.jpg', sigla: 'CONICT', ano: '2023', descricao: 'IFSP Capivari/SP (22 a 24 de Novembro) - Apresentação: Lucas Caraça'},
      {imagem: 'imagens/eventos/participacao_publicacao/conict/conict_2023_maria_wianney_apresentacao.jpg', sigla: 'CONICT', ano: '2023', descricao: 'IFSP Capivari/SP (22 a 24 de Novembro) - Apresentação: Maria Wianney'},
      {imagem: 'imagens/eventos/participacao_publicacao/conict/conict_2023_ryan_apresentacao.jpg', sigla: 'CONICT', ano: '2023', descricao: 'IFSP Capivari/SP (22 a 24 de Novembro) - Apresentação: Ryan Campos'},

      {imagem: 'imagens/eventos/participacao_publicacao/eppeq/eppeq_2023_grupo.jpg', sigla: 'EPPEQ', ano: '2023', descricao: 'IFSP Sertãozinho/SP e USP Ribeirão Preto/SP (14 e 15 de Setembro) - Foto do Grupo: Ryan Campos, Bianca Montemor, Ricardo Reis, Ana Paula Kawabe e Lyan Souza'},
      {imagem: 'imagens/eventos/participacao_publicacao/eppeq/eppeq_2023_grupo_lyan_bianca_ricardo_ryan_paula.jpg', sigla: 'EPPEQ', ano: '2023', descricao: 'IFSP Sertãozinho/SP e USP Ribeirão Preto/SP (14 e 15 de Setembro) - Foto do Grupo: Ricardo Reis, Ana Paula Kawabe, Ryan Campos, Bianca Montemor e Lyan Souza'},
      {imagem: 'imagens/eventos/participacao_publicacao/eppeq/eppeq_2023_grupo_2_lyan_bianca_ricardo_ryan_paula.jpg', sigla: 'EPPEQ', ano: '2023', descricao: 'IFSP Sertãozinho/SP e USP Ribeirão Preto/SP (14 e 15 de Setembro) - Foto do Grupo: Ryan Campos, Ana Paula Kawabe, Bianca Montemor, Lyan Souza e Ricardo Reis'},
      {imagem: 'imagens/eventos/participacao_publicacao/eppeq/eppeq_2023_apresentacao_ricardo_bianca.jpg', sigla: 'EPPEQ', ano: '2023', descricao: 'IFSP Sertãozinho/SP e USP Ribeirão Preto/SP (14 e 15 de Setembro) - Apresentação: Bianca Montemor e Ricardo Reis'},

      {imagem: 'imagens/eventos/participacao_publicacao/enebio/enebio_2024_banner_instituicao_evento_PUC_Minas_escola_feira_ciencias.jpg', sigla: 'ENEBIO', ano: '2024', descricao: ' PUC Minas Belo Horizonte/MG (23 a 25 de Outubro) - Instituição que promoveu o evento - PUC Minas e escola onde foi realizada a apresentação na feira ciências'},
      {imagem: 'imagens/eventos/participacao_publicacao/enebio/enebio_2024_lucas_alexssandro_apresentacao.jpg', sigla: 'ENEBIO', ano: '2024', descricao: 'PUC Minas Belo Horizonte/MG (23 a 25 de Outubro) - Apresentação: Lucas Caraça e Alexssandro Ferreira'},
      {imagem: 'imagens/eventos/participacao_publicacao/enebio/enebio_2024_lucas_apresentacao_2.jpg', sigla: 'ENEBIO', ano: '2024', descricao: 'PUC Minas Belo Horizonte/MG (23 a 25 de Outubro) - Apresentação: Lucas Caraça'},
      {imagem: 'imagens/eventos/participacao_publicacao/enebio/enebio_2024_lucas_apresentacao_3.jpg', sigla: 'ENEBIO', ano: '2024', descricao: 'PUC Minas Belo Horizonte/MG (23 a 25 de Outubro) - Apresentação:  Lucas Caraça'},
      {imagem: 'imagens/eventos/participacao_publicacao/enebio/enebio_2024_lucas_apresentacao_4.jpg', sigla: 'ENEBIO', ano: '2024', descricao: 'PUC Minas Belo Horizonte/MG (23 a 25 de Outubro) - Apresentação:  Lucas Caraça'},

      {imagem: 'imagens/eventos/participacao_publicacao/eias/eias_2024_imigracao.jpg', sigla: 'EIAS', ano: '2024', descricao: 'Instituto Universitário Elbio Fernández - Montevideo Uruguai (11 a 15 de Novembro) - Documentação Imigração'},
      {imagem: 'imagens/eventos/participacao_publicacao/eias/eias_2024_chegada_grupo_escola_evento_congresso.jpg', sigla: 'EIAS', ano: '2024', descricao: 'Instituto Universitário Elbio Fernández - Montevideo Uruguai (11 a 15 de Novembro): chegada grupo no local do congresso'},
      {imagem: 'imagens/eventos/participacao_publicacao/eias/eias_2024_alex_apresentacao_trabalho_gabriel_baroni.jpg', sigla: 'EIAS', ano: '2024', descricao: 'Instituto Universitário Elbio Fernández - Montevideo Uruguai (11 a 15 de Novembro) - Apresentação: Alexssandro Ferreira sobre o trabalho feito por Gabriel Baroni'},
      {imagem: 'imagens/eventos/participacao_publicacao/eias/eias_2024_alex_apresentacao.jpeg', sigla: 'EIAS', ano: '2024', descricao: 'Instituto Universitário Elbio Fernández - Montevideo Uruguai (11 a 15 de Novembro) - Apresentação: Alexssandro Ferreira'},
      {imagem: 'imagens/eventos/participacao_publicacao//eias/eias_2024_alex_paula_ivana.jpg', sigla: 'EIAS', ano: '2024', descricao: 'Instituto Universitário Elbio Fernández - Montevideo Uruguai (11 a 15 de Novembro) - Alexssandro, Ana Paula Kawabe e profa Ivana Elena (LTE-PECIM-Unicamp)'},
      {imagem: 'imagens/eventos/participacao_publicacao/eias/eias_2024_paula_apresentacao.jpeg', sigla: 'EIAS', ano: '2024', descricao: 'Instituto Universitário Elbio Fernández - Montevideo Uruguai (11 a 15 de Novembro) - Apresentação: Ana Paula Kawabe'},
      {imagem: 'imagens/eventos/participacao_publicacao/eias/eias_2024_paula_apresentacao_2.jpeg', sigla: 'EIAS', ano: '2024', descricao: 'Instituto Universitário Elbio Fernández - Montevideo Uruguai (11 a 15 de Novembro) - Apresentação: Ana Paula Kawabe'},
      {imagem: 'imagens/eventos/participacao_publicacao/eias/eias_2024_lucas_apresentacao.jpg', sigla: 'EIAS', ano: '2024', descricao: 'Instituto Universitário Elbio Fernández - Montevideo Uruguai (11 a 15 de Novembro) - Apresentação: Lucas Caraça'},
      {imagem: 'imagens/eventos/participacao_publicacao/eias/eias_2024_lucas_apresentacao_2.jpg', sigla: 'EIAS', ano: '2024', descricao: 'Instituto Universitário Elbio Fernández - Montevideo Uruguai (11 a 15 de Novembro) - Apresentação: Lucas Caraça'},
      {imagem: 'imagens/eventos/participacao_publicacao/eias/eias_2024_gabriel_kawabe_apresentacao.jpeg', sigla: 'EIAS', ano: '2024', descricao: 'Instituto Universitário Elbio Fernández - Montevideo Uruguai (11 a 15 de Novembro) - Apresentação: Gabriel Kawabe'},
      {imagem: 'imagens/eventos/participacao_publicacao/eias/eias_2024_gabriel_kawabe_apresentacao_2.jpeg', sigla: 'EIAS', ano: '2024', descricao: 'Instituto Universitário Elbio Fernández - Montevideo Uruguai (11 a 15 de Novembro) - Apresentação: Gabriel Kawabe'},
      {imagem: 'imagens/eventos/participacao_publicacao/eias/eias_2024_palestrante_marco_antonio_moreira.jpeg', sigla: 'EIAS', ano: '2024', descricao: 'Instituto Universitário Elbio Fernández - Montevideo Uruguai (11 a 15 de Novembro) - Palestrante: Marco Antônio Moreira'},

      {imagem: 'imagens/eventos/participacao_publicacao/eppeq/eppeq_2025_grupo.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'UNESP, Campus Presidente Prudente/SP (17 a 19 de Setembro) - Foto do Grupo'},
      {imagem: 'imagens/eventos/participacao_publicacao/eppeq/eppeq_2025.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'UNESP, Campus Presidente Prudente/SP (17 a 19 de Setembro) - Apresentação do Grupo'},
      {imagem: 'imagens/eventos/participacao_publicacao/eppeq/eppeq_2025_grupo_2.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'UNESP, Campus Presidente Prudente/SP (17 a 19 de Setembro) - Apresentação: Ana Paula Kawabe'},
      {imagem: 'imagens/eventos/participacao_publicacao/eppeq/eppeq_2025_ana_clara.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'UNESP, Campus Presidente Prudente/SP (17 a 19 de Setembro) - Apresentação: Ana Clara Godinho'},
      {imagem: 'imagens/eventos/participacao_publicacao/eppeq/eppeq_2025_yara_freitas.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'UNESP, Campus Presidente Prudente/SP (17 a 19 de Setembro) - Apresentação: Yara Freitas'},
      {imagem: 'imagens/eventos/participacao_publicacao/eppeq/eppeq_2025_encerramento.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'UNESP, Campus Presidente Prudente/SP (17 a 19 de Setembro) - Cerimônia de Encerramento'},
    ];
  }
  return [];
}
