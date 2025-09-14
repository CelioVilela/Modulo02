interface livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

const livros: livro = {
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  anoPublicacao: 1899
};

console.log(`Os dados do livro são:\nTitulo: ${livros.titulo}\nAutor: ${livros.autor}\nAno da publicação: ${livros.anoPublicacao}`);

