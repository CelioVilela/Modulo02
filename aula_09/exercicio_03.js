//Ler o salário fixo de um vendedor, o valor total da vendas efetuadas por ele, apresentar o valor da comissão e o salário total.
const readline = require('readline-sync');

let salario = readline.question('Insira o seu salário: ');
let vendas = readline.question('Insira o total de vendas em reais: ');
let porcentagem = readline.question('Insira a porcentagem de comissao: ');

let comissao = ((vendas * porcentagem)/100);
let total = parseInt(salario) + parseInt(comissao);

console.log("Sua comissão é: ", comissao);
console.log("O salário total é: ", total);
