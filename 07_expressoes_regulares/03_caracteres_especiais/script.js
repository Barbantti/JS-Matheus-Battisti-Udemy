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

const pontoRegex = /./;

console.log(pontoRegex.test(". (ponto)  - qualquer caractere, menos nova linha(quebra de linha)(coringa)"));

const dRegex = /\d/; //[0-9]

console.log(pontoRegex.test("\d - qual quer tipo de caractere que contenha números 123456"));

const dRegex2 = /\D/; //[^0-9]

console.log(pontoRegex.test("\D - aceita caracteres que nao sao dígitos"));

const sRegex = /\s/; //[" "]

console.log(pontoRegex.test("\s - aceita qual quer caractere de espaço em branco"));

const sRegex2 = /\S/; //[" "]

console.log(pontoRegex.test("\S - aceita caractere que seja espaço em branco, string por exemplo con uma frase."));

const wRegex = /\w/;

console.log(pontoRegex.test("\w - so aceita um caractere alfanumérico"));