//operador ocorrência precisa

/* 
--Inserir o número de ocorrência entre chaves {};
*/

const cep = /\d{5}-\d{3}/;
//retorna true
console.log(cep.test("02992-030"));
//retorna false
console.log(cep.test("asd-asd"));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;
//retorna true
console.log(tel.test("(11)91234-56789"));
//retorna false
console.log(tel.test("(11)91234-567"));