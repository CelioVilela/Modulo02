var produtos = [];
function adicionarProduto(a) {
    produtos.push(a);
}
adicionarProduto({
    id: 1,
    nome: "Teclado",
    preco: 15.90,
    categoria: "Informatica"
});
adicionarProduto({
    id: 2,
    nome: "Mouse",
    preco: 32.90,
    categoria: "Informatica"
});
console.log(produtos);
