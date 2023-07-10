//construtores sao formas de criar instanciar uma classe em uma linguagem de programação;
//instanciar === criar um objeto novo;
//no construtor ja podemos definir propriedades;

function criarCachorro(raca, patas, cor) {
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  cachorro.latir = function() {
    console.log("Au au");
  }
  return cachorro;
}

let doberman = criarCachorro('Doberman', 4, 'preta');

console.log(doberman);

doberman.latir();