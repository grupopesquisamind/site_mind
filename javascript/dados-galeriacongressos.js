function listarItens(tipo) {
  if (tipo === 'galeriacongressos') {
    return [
      {imagem: 'imagens/eventos/img/conict/conict_2022_bianca_ricardo_apresentacao.jpeg', sigla: 'CONICT', ano: '2022', descricao: 'Reitoria IFSP/SP - Apresentação: Bianca Montemor e Ricardo Reis'},
      {imagem: 'imagens/eventos/img/conict/conict_2022_bianca_ricardo_apresentacao_2.jpeg', sigla: 'CONICT', ano: '2022', descricao: 'Reitoria IFSP/SP - Apresentação: Bianca Montemor e Ricardo Reis'},
      {imagem: 'imagens/eventos/img/conict/conict_2022_bianca_ricardo_apresentacao_3.jpeg', sigla: 'CONICT', ano: '2022', descricao: 'Reitoria IFSP/SP - Apresentação: Bianca Montemor e Ricardo Reis'},
      {imagem: 'imagens/eventos/img/conict/conict_2022_bianca_ricardo_apresentacao_4.jpeg', sigla: 'CONICT', ano: '2022', descricao: 'Reitoria IFSP/SP - Apresentação: Bianca Montemor e Ricardo Reis'},
      
      {imagem: 'imagens/eventos/img/conict/conict_2023_bianca_montemor_apresentacao.jpg', sigla: 'CONICT', ano: '2023', descricao: 'IFSP Capivari/SP - Apresentação: Bianca Montemor'},
      {imagem: 'imagens/eventos/img/conict/conict_2023_gabriel_kawabe_apresentacao.jpg', sigla: 'CONICT', ano: '2023', descricao: 'IFSP Capivari/SP - Apresentação: Gabriel Kawabe'},
      {imagem: 'imagens/eventos/img/conict/conict_2023_lucas_caraca_apresentacao.jpg', sigla: 'CONICT', ano: '2023', descricao: 'IFSP Capivari/SP - Apresentação: Lucas Caraça'},
      {imagem: 'imagens/eventos/img/conict/conict_2023_maria_wianney_apresentacao.jpg', sigla: 'CONICT', ano: '2023', descricao: 'IFSP Capivari/SP - Apresentação: Maria Wianney'},
      {imagem: 'imagens/eventos/img/conict/conict_2023_ryan_apresentacao.jpg', sigla: 'CONICT', ano: '2023', descricao: 'IFSP Capivari/SP - Apresentação: Ryan Campos'},
      
      {imagem: 'imagens/eventos/img/eppeq/eppeq_2023_grupo.jpg', sigla: 'EPPEQ', ano: '2023', descricao: 'Sertãozinho/SP e Ribeirão Preto/SP (Setembro) - Foto do Grupo: Ryan Campos, Bianca Montemor, Ricardo Reis, Ana Paula Kawabe e Lyan Souza'},
      {imagem: 'imagens/eventos/img/eppeq/eppeq_2023_grupo_lyan_bianca_ricardo_ryan_paula.jpg', sigla: 'EPPEQ', ano: '2023', descricao: 'Sertãozinho/SP e Ribeirão Preto/SP (Setembro) - Foto do Grupo: Ricardo Reis, Ana Paula Kawabe, Ryan Campos, Bianca Montemor e Lyan Souza'},
      {imagem: 'imagens/eventos/img/eppeq/eppeq_2023_grupo_2_lyan_bianca_ricardo_ryan_paula.jpg', sigla: 'EPPEQ', ano: '2023', descricao: 'Sertãozinho/SP e Ribeirão Preto/SP (Setembro) - Foto do Grupo: Ryan Campos, Ana Paula Kawabe, Bianca Montemor, Lyan Souza e Ricardo Reis'},
      {imagem: 'imagens/eventos/img/eppeq/eppeq_2023_apresentacao_ricardo_bianca.jpg', sigla: 'EPPEQ', ano: '2023', descricao: 'Sertãozinho/SP e Ribeirão Preto/SP (Setembro) - Apresentação: Bianca Montemor e Ricardo Reis'},

      {imagem: 'imagens/eventos/img/enebio/enebio_2024_banner_instituicao_evento_PUC_Minas_escola_feira_ciencias.jpg', sigla: 'ENEBIO', ano: '2024', descricao: 'Belo Horizonte/MG - Instituição que promoveu o evento - PUC Minas e escola onde foi realizada a apresentação na feira ciências'},
      {imagem: 'imagens/eventos/img/enebio/enebio_2024_lucas_alexssandro_apresentacao.jpg', sigla: 'ENEBIO', ano: '2024', descricao: 'Belo Horizonte/MG - Apresentação: Lucas Caraça e Alexssandro Ferreira'},
      {imagem: 'imagens/eventos/img/enebio/enebio_2024_lucas_apresentacao_2.jpg', sigla: 'ENEBIO', ano: '2024', descricao: 'Belo Horizonte/MG (Outrubro) - Apresentação: Lucas Caraça'},
      {imagem: 'imagens/eventos/img/enebio/enebio_2024_lucas_apresentacao_3.jpg', sigla: 'ENEBIO', ano: '2024', descricao: 'Belo Horizonte/MG (Outrubro) - Apresentação:  Lucas Caraça'},
      {imagem: 'imagens/eventos/img/enebio/enebio_2024_lucas_apresentacao_4.jpg', sigla: 'ENEBIO', ano: '2024', descricao: 'Belo Horizonte/MG (Outrubro) - Apresentação:  Lucas Caraça'},

      {imagem: 'imagens/eventos/img/eias/eias_2024_imigracao.jpg', sigla: 'EIAS', ano: '2024', descricao: 'Montevideo Uruguai (Novembro) - Documentação Imigração'},
      {imagem: 'imagens/eventos/img/eias/eias_2024_chegada_grupo_escola_evento_congresso.jpg', sigla: 'EIAS', ano: '2024', descricao: 'Montevideo Uruguai (Novembro): chegada grupo no local do congresso'},
      {imagem: 'imagens/eventos/img/eias/eias_2024_alex_apresentacao_trabalho_gabriel_baroni.jpg', sigla: 'EIAS', ano: '2024', descricao: 'Montevideo Uruguai (Novembro) - Apresentação: Alexssandro Ferreira sobre o trabalho feito por Gabriel Baroni'},
      {imagem: 'imagens/eventos/img/eias/eias_2024_alex_apresentacao.jpeg', sigla: 'EIAS', ano: '2024', descricao: 'Montevideo Uruguai (Novembro) - Apresentação: Alexssandro Ferreira'},
      {imagem: 'imagens/eventos/img//eias/eias_2024_alex_paula_ivana.jpg', sigla: 'EIAS', ano: '2024', descricao: 'Montevideo Uruguai (Novembro) - Alexssandro, Ana Paula Kawabe e profa Ivana Elena (LTE-PECIM-Unicamp)'},
      {imagem: 'imagens/eventos/img/eias/eias_2024_paula_apresentacao.jpeg', sigla: 'EIAS', ano: '2024', descricao: 'Montevideo Uruguai (Novembro) - Apresentação: Ana Paula Kawabe'},
      {imagem: 'imagens/eventos/img/eias/eias_2024_paula_apresentacao_2.jpeg', sigla: 'EIAS', ano: '2024', descricao: 'Montevideo Uruguai (Novembro) - Apresentação: Ana Paula Kawabe'},
      {imagem: 'imagens/eventos/img/eias/eias_2024_lucas_apresentacao.jpg', sigla: 'EIAS', ano: '2024', descricao: 'Montevideo Uruguai (Novembro) - Apresentação: Lucas Caraça'},
      {imagem: 'imagens/eventos/img/eias/eias_2024_lucas_apresentacao_2.jpg', sigla: 'EIAS', ano: '2024', descricao: 'Montevideo Uruguai (Novembro) - Apresentação: Lucas Caraça'},
      {imagem: 'imagens/eventos/img/eias/eias_2024_gabriel_kawabe_apresentacao.jpeg', sigla: 'EIAS', ano: '2024', descricao: 'Montevideo Uruguai (Novembro) - Apresentação: Gabriel Kawabe'},
      {imagem: 'imagens/eventos/img/eias/eias_2024_gabriel_kawabe_apresentacao_2.jpeg', sigla: 'EIAS', ano: '2024', descricao: 'Montevideo Uruguai (Novembro) - Apresentação: Gabriel Kawabe'},
      {imagem: 'imagens/eventos/img/eias/eias_2024_palestrante_marco_antonio_moreira.jpeg', sigla: 'EIAS', ano: '2024', descricao: 'Montevideo Uruguai (Novembro) - Palestrante: Marco Antônio Moreira'},

      {imagem: 'imagens/eventos/img/eppeq/eppeq_2025_grupo.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'Presidente Prudente/SP - Foto do Grupo'},
      {imagem: 'imagens/eventos/img/eppeq/eppeq_2025.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'Presidente Prudente/SP - Apresentação do Grupo'},
      {imagem: 'imagens/eventos/img/eppeq/eppeq_2025_grupo_2.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'Presidente Prudente/SP - Apresentação: Ana Paula Kawabe'},
      {imagem: 'imagens/eventos/img/eppeq/eppeq_2025_ana_clara.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'Presidente Prudente/SP - Apresentação: Ana Clara Godinho'},
      {imagem: 'imagens/eventos/img/eppeq/eppeq_2025_yara_freitas.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'Presidente Prudente/SP - Apresentação: Yara Freitas'},
      {imagem: 'imagens/eventos/img/eppeq/eppeq_2025_encerramento.jpg', sigla: 'EPPEQ', ano: '2025', descricao: 'Presidente Prudente/SP - Cerimônia de Encerramento'},
    ];
  }
  return [];
}
