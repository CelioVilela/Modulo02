class Veiculo {
  marca: string;
  modelo: string;
  ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  exibirInfo(): void {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Ano: ${this.ano}`);
  }
}

class Carro extends Veiculo {
  numeroDePortas: number;

  constructor(marca: string, modelo: string, ano: number, numeroDePortas: number) {
    super(marca, modelo, ano);
    this.numeroDePortas = numeroDePortas;
  }

  exibirInfo(): void {
    super.exibirInfo();
    console.log(`Número de portas: ${this.numeroDePortas}`);
  }
}

class Moto extends Veiculo {
  tipoDeGuidao: string;

  constructor(marca: string, modelo: string, ano: number, tipoDeGuidao: string) {
    super(marca, modelo, ano);
    this.tipoDeGuidao = tipoDeGuidao;
  }

  exibirInfo(): void {
    super.exibirInfo();
    console.log(`Tipo de guidão: ${this.tipoDeGuidao}`);
  }
}

const meuCarro = new Carro("Toyota", "Corolla", 2022, 4);
const minhaMoto = new Moto("Honda", "CB 500", 2021, "Esportivo");

meuCarro.exibirInfo();
minhaMoto.exibirInfo();