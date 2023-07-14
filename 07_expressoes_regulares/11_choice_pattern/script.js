//Choice pattern

/* 
--Pode colocar uma instrução na regex que funciona como um || (or) das condicionais;
*/

const reg = /\w+: (Leonardo|Ana|Heitor)/;


console.log(reg.test("Nome: Leonardo"));
console.log(reg.test("Nome: Ana"));
console.log(reg.test("Nome: Heitor"));