//Validando um domínio na pratica

const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.site.com.br"));
console.log(validaDominio.test("www.site.com"));
console.log(validaDominio.test("site.com.br"));