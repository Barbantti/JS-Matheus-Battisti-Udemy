//Choice pattern

/* 
--Pode colocar um regex que aceite a seguinte expressão "Marca:", "nomeDaMarca:";
--Onde nomeDaMarca pode variar para Nike, Adidas, Puma, Asics;
--Teste;
*/

const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validaMarca.test("Marca: Adidas"))

