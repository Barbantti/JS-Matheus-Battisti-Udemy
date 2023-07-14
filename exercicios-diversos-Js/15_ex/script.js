//Exercício - Regex

/* 
--Crie uma regex que aceite so letras maiúsculas;
--Teste;
*/

const soLetrasMaiusc = /^[A-Z]/;
//retorna true
console.log(soLetrasMaiusc.test("APENAS MAIUSC"));
//retorna false
console.log(soLetrasMaiusc.test("apenas maiusc"));