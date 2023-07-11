//propriedades únicas, que nao podem ser alteradas e nem criadas duas vezes;(como se fosse uma variável "const");
//pode-se utilizar como uma constante, so que para propriedade de objeto;


class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  latir() {
    console.log("Au au");
  }

}

Cachorro.prototype.raca = 'SRD';

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let labrador = new Cachorro('Labrador', 'Marrom');

console.log(labrador.patas);

labrador.latir();

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);

//acessando symbol
console.log(Cachorro.prototype[patas]);

console.log(labrador[patas]);