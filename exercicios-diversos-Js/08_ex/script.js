//crie uma classe que simule um carro;
//propriedades: marca, cor, gasolina restante;
//crie um método de dirigir o carro, que va diminuindo a gasolina gradativamente;
//e um método de abastecer para aumentar a gasolina quando necessário;

class Carro {
  constructor(marca, modelo, cor, gasolinaRestante, consumo, valorCombustivel) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
    this.consumo = consumo;
    this.valorCombustivel = valorCombustivel;
  }

  dirigir(km) {

    let litrosConsumidos = km / this.consumo;

    this.gasolinaRestante -= litrosConsumidos;
  }

  abastecer(l) {
    this.gasolinaRestante += l;
  }
}

//instance

let carro = new Carro("Nissan", "Versa aut 1.6", "Preta", "45", 10, 5.35);

console.log(carro);

carro.dirigir(350);

console.log(carro);

carro.abastecer(38.89);

console.log(carro);