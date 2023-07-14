//operador question ?

/* 
--Faz com que o código anterior se torne opcional;
*/

const padrao = /abacax?i/;

console.log(padrao.test("abacaxi"));
console.log(padrao.test("abacai"));

const padrao2 = /\d+\w?/;


console.log(padrao2.test("123"));
console.log(padrao2.test("123a"));
console.log(padrao2.test("123 "));