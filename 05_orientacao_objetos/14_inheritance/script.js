//inheritance (herança)
//uma classe pode herdar propriedades de outra classe por meio da "herança";
//para isso utiliza-se a palavra reservada "extends";
//basicamente vai herdar atributos, propriedades e métodos de uma classe pai;


class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

let coiote = new Mamifero(4);

console.log(("Coiote", coiote.patas));

//classe filho do "Mamifero";
class Cachorro extends Mamifero {
  constructor(patas, raca) {
    super(patas, patas);
    this.raca = raca;
  }
  beberAgua() {
    console.log("Beber água");
  }
}

let pug = new Cachorro(4, "Pug");

console.log("Pug n/patas", pug.patas);

pug.beberAgua();

class Gato extends Mamifero {
  constructor(patas, raca) {
    super(patas, patas);
    this.raca = raca;
  }
  miau() {
    console.log("Miauuu");
  }
  lamberPelos() {
    console.log("Lamber os pelos");
  }
}

let siames = new Gato(4, "Siamês");

console.log("Siamês n/patas", siames.patas);
console.log("Siamês raca", siames.raca);
siames.miau();
siames.lamberPelos();