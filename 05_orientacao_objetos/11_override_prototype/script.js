//sempre que adicionar-se uma propriedade a um objeto, e criada uma idêntica no prototype;
//pode-se substituir a do prototype;
//pode-se criar um valor padrão para o prototype em si, sem afetar na classe que esta sendo estanciada;


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
Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', 'Marrom');

console.log(labrador.patas);

labrador.latir();

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);