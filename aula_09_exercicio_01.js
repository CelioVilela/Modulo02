//Receber pelo prompt o nome, rg, cpf e idade, e escreve-los ma tela.
let dados = {
  nome: prompt('Nome: '),
  rg: prompt('RG: '),
  cpf: prompt('CPF: '),
  idade: prompt("Idade: ")
};

alert(`Dados pessoais:\nNome: ${dados.nome}\nRG: ${dados.rg}\nCPF: ${dados.cpf}\nIdade: ${dados.idade} `);
