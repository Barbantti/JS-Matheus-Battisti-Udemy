let nomes = ["Ana", "Heitor", "Leonardo",
"Bolacha", "Biscoito", "Dirceu", "Gilda"];
let carros = ["BMW", "Audi", "VW", "Nissan"];

function verificaElemento(arr) {
  if(arr.length >= 5) {
    console.log("Muitos elementos!");
  } else {
    console.log("Poucos elementos!");
  }
};

verificaElemento(nomes);
verificaElemento(carros);