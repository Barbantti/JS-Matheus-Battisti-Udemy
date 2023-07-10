//classe === objeto
//o prototype do JavaScript pode ser chamado de classe;
//pois nas outras linguagens uma class e um molde de um objeto;
//ou seja, pode-se criar diversos objetos em cima de um prototype;

let cachorro = {
  patas: 4,
  raca: 'SRD',
  latir: function() {
    console.log("Au Au");
  }
}

let Labrador = Object.create(cachorro);

Labrador.latir();
Labrador.raca = "Labrador";

console.log(Labrador.raca);
console.log(cachorro.raca);

let pastor = Object.create(cachorro);

pastor.raca = "Pastor alemão";

console.log(pastor.raca);