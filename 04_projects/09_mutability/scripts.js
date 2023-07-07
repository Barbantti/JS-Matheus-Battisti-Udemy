let pessoa = {
  nome: "Ana"
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);


pessoa2.nome = "Heitor";

console.log(pessoa.nome);

pessoa.nome = "Leonardo"

console.log(pessoa2.nome);


// [] ==> array;
// {} ==> obj