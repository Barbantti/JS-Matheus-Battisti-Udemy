//Expressões regulares
/* 
--E uma forma de encontrar padrões em uma string;

--Por exemplo: validar se so tem números;

--Em vez de criarmos funções complexas, podemos encontrar dados em texto por meio das expressões regulares;
--Também chamado de regex (em ingles: regular expression);

--As expressões regulares no Js sao um tipo de objeto;

--Pode-se criar de duas maneiras:

1- new RegExp;

let reg1 = new RegExp("Teste");

2- (Por meio de duas barras) /.../;

let reg2 = /teste/;

--Verificando padrões com regex

--Depois da definição do padrão por meio da regex;

--Utiliza-se o método test() para verificar se o padrão e retornado;

--Com isso se recebe de resposta um boolean (true or false);
*/

const reg1 = new RegExp('bola');

//retorna true
console.log(reg1.test("Tem bola?"));

//retorna false
console.log(reg1.test("Nao tem"));

const reg2 = /bola/;

let text = "Tem bola na cesta";

//retorna true
console.log(reg1.test("Tem bola?"));

//retorna false
console.log(reg1.test("Nao tem"));

//retorna true
console.log(reg2.test(text));

//on the flight - retorna true
console.log(/quadrado/.test("Onde tem um quadrado?"));

//procura a expressão mesmo que dentro de uma frase sem espaços - retorna true
console.log(/quadrado/.test("121531513515Onde tem um quadrado?51531531351351"));

