// Ler um número inteiro e apresentar o resultado do quadrado desse número
const readline = require('readline-sync');
let num = readline.question('Insira o número: ');
let quadrado = (num * num);

console.log("O resultado é: ", quadrado);
