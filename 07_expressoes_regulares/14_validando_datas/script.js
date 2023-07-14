//Validando datas na pratica

const validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarDataNasc.test('26/03/2023'));
console.log(validarDataNasc.test('26-03-2023'));
console.log(validarDataNasc.test('26032023'));