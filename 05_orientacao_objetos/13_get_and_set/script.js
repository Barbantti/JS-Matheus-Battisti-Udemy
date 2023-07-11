//get: serve para resgatar o valor de uma propriedade;
//set: serve para alterar o valor de uma propriedade;
//set e get vao funcionar basicamente como paramentos;


class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  latir() {
    console.log("Au au");
  }

  get getCor() {
    return this.cor;
  }

  set setCor(cor) {
    this.cor = cor;
  }

}

let pastor = new Cachorro('Pastor Alemão', 'Sem cor');

console.log(pastor);

//adicionando valor utilizando o "setter";

pastor.setCor = 'Marrom';

//solicitando valor utilizando o "getter";

console.log(pastor.getCor);