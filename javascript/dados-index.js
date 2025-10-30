function listarItens(chave) {
 
  if (chave === 'responsaveis') {
    return [
    {
      id: "1",
      abreviatura: "APK",
      nome: "Ana Paula Kawabe de Lima Ferreira",
      funcao: "Profa. EBTT de Química",
      email: "ana.kawabe@ifsp.edu.br",
    },
    {
      id: "2",
      abreviatura: "AFS",
      nome: "Alexssandro Ferreira da Silva",
      funcao: "Técnico de Tecnologia da Informação",
      email: "alexssandro.ferreira@ifsp.edu.br",
    },
{
      id: "3",
      abreviatura: "TRS",
      nome: "Tardelli Ronan Coelho Stekel",
      funcao: "Prof. EBTT de Informática",
      email: "stekel@ifsp.edu.br",
    },

 // Adicione mais autores conforme necessário
    ];
  }
  return [];
}
