//Caracteres especiais

/* 
-- \d - aceita qual quer tipo de caractere que contenha números;

-- \w - so aceita um caractere alfanumérico ("teste")

-- \s - aceita qual quer caractere de espaço em branco

-- \D - aceita caracteres que nao sao dígitos

-- \W -  aceita caractere nao-alfanumérico

-- \S - aceita caractere que seja espaço em branco, string por exemplo con uma frase.

-- . (ponto)  - aceita qualquer caractere, menos nova linha(quebra de linha)(coringa)

*/
//retorna true se uma string tem dois caracteres, se tiver mais de dois retorna false.
const dia = /\d\d/;

console.log(dia.test("2023") && "2023".length == 2); //false
console.log(dia.test("Heitor")); //false
console.log(dia.test("26") && "26".length == 2); //true

const palavrasPeloMenosTresLetras = /\w\w\w/; //se tiver 3 letras ou mais retorna true.

console.log(palavrasPeloMenosTresLetras.test("asd"));
console.log(palavrasPeloMenosTresLetras.test("asdd"));
console.log(palavrasPeloMenosTresLetras.test("ass"));