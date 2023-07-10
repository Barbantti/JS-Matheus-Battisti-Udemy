//um objeto fallback de outro objeto;
//quando um objeto recebe uma requisição de uma propriedade que nao tem, ela e procurada no "prototype" deste objeto;
//o prototypre de um objeto criado do zero e o "Object", que tem os métodos nativos da linguagem;

const pessoa = {
  maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
console.group(pessoa.hasOwnProperty('maos'));