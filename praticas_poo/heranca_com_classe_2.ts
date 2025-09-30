class funcionario {
    nome: string;
    salario: number;
  
    constructor(nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }

    exibirDados(){
        console.log(`Nome: ${this.nome}, Salário: R$${this.salario},00`);
    }
    
    aumentarSalario(porcentagem: number){
        this.salario += this.salario * (porcentagem/100)
        console.log(`O salario do funcionário aumentou ${porcentagem}%, novo salário: R$${this.salario},00`)
    }
}

class gerente extends funcionario{
    departamento: string;

    constructor(nome: string, salario: number, departamento: string){
        super(nome, salario);
        this.departamento = departamento;
    }

    exibirDados(){
        console.log(`Nome: ${this.nome}, Salário: R$${this.salario},00, Departamento: ${this.departamento}`);
    }

    aumentarSalario(porcentagem: number){
        this.salario += this.salario * (porcentagem/100)
        console.log(`O salario do gerente aumentou ${porcentagem}%, novo salário: R$${this.salario},00`)
    }
}

const meuFuncionario = new funcionario("João", 3000);
const meuGerente = new gerente("Célio", 4000, "Vendas");
meuFuncionario.exibirDados();
meuGerente.exibirDados();
meuFuncionario.aumentarSalario(10);
meuGerente.aumentarSalario(20);