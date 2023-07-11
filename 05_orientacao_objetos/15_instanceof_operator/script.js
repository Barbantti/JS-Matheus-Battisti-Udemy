//instanceof operator
//pode-se basicamente verificar-se de quem e o pai do objeto utilizando o instanceof;
class Oviparos {
  constructor(patas) {
    this.patas = patas;
  }
}

let galinha = new Oviparos(2);

console.log(`A galinha tem ${galinha.patas} patas`);

class Peixe extends Oviparos {
  constructor(patas, cauda) {
    super(patas, patas);
    this.cauda = cauda;
  }
}

let peixes = new Peixe(0, 1);

console.log(`O peixe tem ${peixes.patas} patas e ${peixes.cauda} cauda`);

//objeto pai;
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

//verificar se a instancia ex: "Gato" vem do objeto pai no caso "Mamifero". Que deve retornar um boolean (true our false);
console.log("Classe Gato e filho de mamifero?", new Gato instanceof Mamifero);

console.log("Classe Peixe e filho de Ovíparos?", new Peixe instanceof Oviparos);

//ou qual quer outra instancia que possa estar vinculada ao objeto pai;
console.log("Variável Galinha e filho de Ovíparos?",  galinha instanceof Oviparos);

console.log("Variável coiote e filho de mamifero?",  coiote instanceof Mamifero);

//exemplo de false;
console.log("Classe Gato e filho de mamifero?", new Peixe instanceof Mamifero);

console.log("Classe Gato e filho de mamifero?", new Gato instanceof Oviparos);
//desta maneira consegue utilizar o instanceof para verificar quem e o pai do objeto, de que instancia saiu aquele objeto;