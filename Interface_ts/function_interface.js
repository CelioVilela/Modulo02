var produtos = [];

function adicionarProduto(a) {
    produtos.push(a);
}

adicionarProduto({
    id: 1,
    nome: "Teclado",
    preco: 15.90,
    categoria: "Informática"
});
adicionarProduto({
    id: 1,
    nome: "Mouse",
    preco: 32.90,
    categoria: "Informática"
});

console.log(produtos);
