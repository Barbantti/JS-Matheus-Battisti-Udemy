let carros = ["BMW", "Audi", "VW", "Fiat"];

let removerPrimeiroCarro = carros.shift();

console.log(removerPrimeiroCarro);
console.log(carros);

carros.unshift('Gurgel');

console.log(carros);
console.log(carros[0]);

// shift ==> remove um elemento no início do array;
// unshift ==> adiciona um elemento no início do array;