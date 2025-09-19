class ContaBancariaSimplificada{
    constructor(nomeDoCorrentista, saldo=0, contaEspecial=false){
        this.nomeDoCorrentista = nomeDoCorrentista;
        this.saldo = saldo;
        this.contaEspecial = contaEspecial;
    }

    //Método para abrir conta
    abreConta(nome, deposito, eEspecial = false){
        this.nomeDoCorrentista = nome;
        this.saldo = deposito;
        this.contaEspecial = eEspecial;
    }

    //Método para abrir conta simples sem deposito especial
    abreContaSimples(nome){
        this.nomeDoCorrentista = nome;
        this.saldo = 0;
        this.contaEspecial = false;
    }   

    //Método para deposito
    deposita(valor){
        if(valor > 0){
            this.saldo += valor;
            console.log("Deposito de R$ " + valor);
        }else{
            console.log("Valor de depósito inválido!");
        }
    }

    //Método retirada
    retirada(valor){
        if(valor > 0 && valor <= this.saldo){
            this.saldo -= valor;
            console.log(`Retirada de R$${valor} realizada. \nSaldo atual: R$${this.saldo}`);
        }else{
            console.log("Saldo insulficiente ou valor inválido!");
        }
    }

    // Exibir os dados da conta

    mostrarDados(){
        console.log("----------DADOS DA CONTA---------");
        console.log("Correntista: ", this.nomeDoCorrentista);
        console.log("Conta Especial: ", this.contaEspecial);
        console.log("Saldo: R$", this.saldo);
    }
}
    //====================
    //Exemplo
    //====================

    const conta1 = new ContaBancariaSimplificada("João", 1000, true);
    conta1.mostrarDados();
    conta1.deposita(500);
    conta1.retirada(50);
    

