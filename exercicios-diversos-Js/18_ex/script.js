//Ex: validando IP

/* 
--Crie uma regex que valide endereços de IP;
*/

const reg = /\d{1-3}\.\d{1-3}\.\d{1-3}\.\d{1-3}/;

console.log(reg.test("127.0.0.1"));
console.log(reg.test("8.8.8.8"));
console.log(reg.test("192.168.0.1"));