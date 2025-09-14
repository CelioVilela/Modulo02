interface carro {
  marca: string;
  modelo: string;
  ano: number;
}

const veiculos: carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022
};

console.log(`Os dados do veículo são:\nMarca: ${veiculos.marca}\nModelo: ${veiculos.modelo}\nAno: ${veiculos.ano}`);   
