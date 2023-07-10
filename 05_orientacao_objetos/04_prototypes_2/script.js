//quando cria-se um objeto a partir de um outro, o base sera o prototype;
//ele herdara tantos os métodos e propriedades de Object (o prototype do objeto base);
//quanto os do objeto base para este novo;

const pessoa = {
  maos: 2,
}

// console.log(Object.getPrototypeOf(pessoa));
// console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
console.group(pessoa.hasOwnProperty('maos'));

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);

console.log(pessoaNova.hasOwnProperty('maos'));

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);