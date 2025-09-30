class transporte {
    constructor(tipo, capacidade) {
        if (this.constructor === transporte) {
            throw new Error("Transporte é uma classe abstrata e não pode ser instanciada diretamente.");
        }
        this.tipo = tipo;
        this.capacidade = capacidade;    
    }      
    }

class carro extends transporte {
    constructor(marca, modelo) {
        super("carro", 5);
        this.marca = marca;
        this.modelo = modelo;
    }  
    dados(){
        console.log(`O veículo ${this.marca} ${this.modelo} é um trasporte do tipo ${this.tipo} e possui uma capacidade de ${this.capacidade} ocupantes.`)
    } 
    }


class onibus extends transporte {
    constructor(linha) {
        super("ônibus", 40);
        this.linha = linha;        
    }
    dados(){
        console.log(`O ${this.tipo} faz a linha ${this.linha} com capacidade para ${this.capacidade} passageiros.`)
    } 
    }


const Veiculo = new carro("Toyota", "Corolla");
Veiculo.dados();

const Onibus = new onibus("Pesqueira - Belo Jardim");
Onibus.dados();