function listarItens(chave) {
 
  if (chave === 'contatos') {
    return [
    {
      id: "1",
      abreviatura: "APK",
      nome: "Ana Paula Kawabe de Lima Ferreira",
      funcao: "Profa. EBTT de Química",
      tipoParticipacao: "Coordenadora",
      email: "equipemindifspjcr@gmail.com",
      lattes: "http://lattes.cnpq.br/4564160743198905",
      imagem: "ana_kawabe.jpg"  // <-- Só o nome do arquivo
    },
    {
      id: "2",
      abreviatura: "AFS",
      nome: "Alexssandro Ferreira da Silva",
      funcao: "Téc. de Tecnologia da Informação",
      tipoParticipacao: "Colaborador Interno",
      email: "equipemindifspjcr@gmail.com",
      lattes: "http://lattes.cnpq.br/3843853231671192",
      imagem: "alexssandro.jpg"  // <-- Só o nome do arquivo

    },
{
      id: "3",
      abreviatura: "TRS",
      nome: "Tardelli Ronan Coelho Stekel",
      funcao: "Prof. EBTT de Informática",
      tipoParticipacao: "Colaborador Interno",
      email: "equipemindifspjcr@gmail.com",
      lattes: "http://lattes.cnpq.br/4733654913237092",
      imagem: ""  // <-- Só o nome do arquivo / se estiver sem foto no lattes adota foto default

    },

 // Adicione mais autores conforme necessário
    ];
  }
  return [];
}
