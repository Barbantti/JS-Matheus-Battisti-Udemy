//Conjunto de caracteres

/* 
--Pode-se definir um conjunto de caracteres para encontrar por regex;

--Basta por entre [] (array);

--Com um traco também pode-se definir um intervalo;

*/

const reg1 = /[12345]/;

console.log(reg1.test("Temos o numero 6"));

console.log(reg1.test("Temos o numero 2"));