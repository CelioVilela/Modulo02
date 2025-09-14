interface livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

const biblioteca: livro[] = [
  {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    anoPublicacao: 1943
  },
  {
    titulo: "Capitães da Areia",
    autor: "Jorge Amado",
    anoPublicacao: 1937
  },
  {
    titulo: "A Moreninha",
    autor: "Joaquim Manuel de Macedo",
    anoPublicacao: 1844
  }
];

console.log(biblioteca[1].titulo);