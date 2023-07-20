//Ex: validando Usuário

/* 
--Crie uma regex que valide nome de usuários no sistema;
--Aceite letras de a-z,_e-, números de 0-9, mínimo de 3 caracteres e máximo de 16;
*/

let validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("03le081995_"));