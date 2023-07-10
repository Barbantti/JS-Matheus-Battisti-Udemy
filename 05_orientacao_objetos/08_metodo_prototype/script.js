//maneira mais correta de criar métodos a um objeto pelo prototype dele;

function Cachorro(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.uivar = function() {
    console.log("Auuuuuu");
  }
}

Cachorro.prototype.uivar = function() {
  console.log("Auuuuuu")
}

Cachorro.prototype.latir = function() {
  console.log("Au au");
}

let = husky = new Cachorro('Husky', 4, 'Cinza');

husky.uivar();
husky.latir();
