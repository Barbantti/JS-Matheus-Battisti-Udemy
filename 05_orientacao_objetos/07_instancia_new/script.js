//em muitas linguagens tem a possibilidade de instanciar um objeto com new, no Js também;

function Cachorro(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.uivar = function() {
    console.log("Auuuuuu");
  }
}


let = husky = new Cachorro('Husky', 4, 'Cinza');
let = viraLata = new Cachorro('Vira Lata', 4, 'Preta e branca');
let labrador = new Cachorro('Labrador', 4, 'Caramelo');
let = golden = new Cachorro('Golden', 4, 'Dourado');

husky.uivar();
console.log(viraLata);
console.log(husky);
console.log(labrador);
console.log(golden);