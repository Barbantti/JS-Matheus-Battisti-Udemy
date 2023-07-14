//Exercício - Regex ID

/* 
--Crie uma regex que aceite so aceite strings terminadas com ID;
--Teste;
*/

const stringComId = /\d+ID\b/;
//retorna true
console.log(stringComId.test("123456ID"));
//retorna false
console.log(stringComId.test("123456id"));