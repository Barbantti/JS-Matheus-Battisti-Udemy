// Calculadora de Retângulos

// Crie uma classe chamada "Retangulo" que representa um retângulo.

// A classe deve ter os seguintes atributos:

// largura: representando a largura do retângulo (número maior que zero).

// altura: representando a altura do retângulo (número maior que zero).

// A classe deve ter os seguintes métodos:

// calcularArea(): retorna a área do retângulo (largura * altura).

// calcularPerimetro(): retorna o perímetro do retângulo (2 * (largura + altura)).

class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }
  //retorna a área do retângulo (largura * altura).
  calcularArea() {

    if (this.largura <= 0 || this.altura <= 0) {
      console.log("Numero menor ou igual zero nao sao aceitos, tente novamente");

    } else {

      let areaRet = this.largura * this.altura;
      this.calcArea = areaRet;

      return this.calcArea;
    }
  }
  //retorna o perímetro do retângulo (2 * (largura + altura)).
  calcularPerimetro() {

    if (this.largura <= 0 || this.altura <= 0) {

      console.log("Numero menor ou igual zero nao sao aceitos, tente novamente");

    } else {
      let periRet = (this.largura + this.altura) * 2;
      this.calcPeri = periRet;
      
      return this.calcPeri;
    }
  }
}
let retangulo = new Retangulo(4, 3);

let calculoArea = retangulo.calcularArea();

let calculoPerimetro = retangulo.calcularPerimetro();

console.log(retangulo);

console.log("área do retângulo", retangulo.calcularArea())

console.log("perímetro do retângulo", retangulo.calcularPerimetro())