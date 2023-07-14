//operador plus+

/* 
--Quando um + esta apos alguma expressão, este elemento pode se repetir mais de uma vez;
*/

const umOuMaisNumeros = /\d+/;
//aceita apenas digitos, retorna true.
console.log(umOuMaisNumeros.test("1518"));
//retorna false se tiver apenas espaço em branco ou letras.
console.log(umOuMaisNumeros.test(""));
console.log(umOuMaisNumeros.test("Hello World!"));