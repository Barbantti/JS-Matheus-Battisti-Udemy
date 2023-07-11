//declarar propriedades em métodos com o consultor via class (instanciar via class e constructor);
//nao pode adicionar propriedades na classe, somente via prototype;
//a classe aceita apenas métodos;


class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  latir() {
    console.log("Au au");
  }

}

Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', 'Marrom');

console.log(labrador.patas);

labrador.latir();