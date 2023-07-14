//Validando um email na pratica

const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("email.email@email.com.br"))
console.log(validarEmail.test("email.email@email.com"))
console.log(validarEmail.test("email.email@email"))