class Package {
    module;
    _token;

    constructor(module, token) {
        if (this.constructor === Package) {
            throw new Error("Package é uma classe abstrata e não pode ser instanciada diretamente.");
        }
        this.module = module;
        this._token = token;
    }

    _useModule() {
        console.log(`Usando o módulo '${this.module}' com token '${this._token}'`);
    }
}
class Server extends Package {
    constructor(module, token) {
        super(module, token);
    }

    iniciarModulo() {
        console.log("Iniciando módulo no servidor.");
        this._useModule(); // Acessando método "protegido" da superclasse
    }
}
const servidor = new Server("Autenticacao", "abc123");

servidor.iniciarModulo(); // Funciona: chama método protegido via método público

// Tentando acessar diretamente o método "protegido"
servidor._useModule(); // Funciona tecnicamente, mas é contra a convenção de encapsulamento