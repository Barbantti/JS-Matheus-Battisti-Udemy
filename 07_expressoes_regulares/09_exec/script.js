//operador método exec

/* 
--O método exec nos retorna um objeto com algumas informações sobre a regex;

--Se nada for encontrado, ele retorna null;
*/

const digitos = /\d+/;
//retorna true por ter encontrado o padrão;
console.log(digitos.exec("Tem o numero 100 aqui"));
//retorna null por nao ter encontrado o padrão;
console.log(digitos.exec("Tem o numero aqui"));