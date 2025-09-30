class administrador {
    nome; 
    #senha;

    constructor(nome, senhaInicial){
        this.nome = nome;
        this.#senha = senhaInicial;
    }

    #alterarSenha(novaSenha){
        this.#senha = novaSenha;
        console.log("Senha alterada com sucesso.");
    }

    mudarSenha(novaSenha){
        if (novaSenha.length >= 6) {
            this.#alterarSenha(novaSenha);
        } else {
            console.log("A nova senha deve ter pelo menos 6 dígitos")
        }
    }

    mostrarDados() {
        console.log(`Administrador: ${this.nome}`);
    }
}

const adm = new administrador("Célio", "senha123");

adm.mostrarDados();

console.log(adm.#senha); //Vai apresentar erro, pois é privado.

adm.#alterarSenha("novaSenha456"); //Vai apresentar erro, pois é privado.

adm.mudarSenha("novaSenha456"); //Vai funcionar pois é público.