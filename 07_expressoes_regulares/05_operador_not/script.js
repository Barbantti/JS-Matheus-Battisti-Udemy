//operador not^

/* 
-- Pode-se escrever um set que aceita tudo, menos alguns caracteres com o not;

--Lembrando que combinações serão aceitas, o negado e apenas se bate com o set;

--Tem que colocar exatamente oque esta entre o conjunto para funcionar a validação;
*/

const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));


const nottoaz = /[^a-z]/;

console.log(nottoaz.test("123 as"));
console.log(nottoaz.test("Aquitema"));


const az = /[a-z]/;

console.log(az.test("Aquitema"));
console.log(az.test("Aqui tem a"));


