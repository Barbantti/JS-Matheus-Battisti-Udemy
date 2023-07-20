//Async function
/* 
--Pode-se criar funções assíncronas com a palavra reservada async;

--Elas retornam uma Promise;

--Se retornar algo, a promessa e resolvida, se der alguma exception a promessa e rejeitada;

--As funções assíncronas nada mais sao do que promessas com notações de função, se retornar alguma coisa, algum valor no Js deste modo esta resolvendo-a e se der algum erro deste modo esta rejeitando essas promessas.
*/

async function somar(a, b) {
  return a + b;
}

somar(2,4).then(value => console.log(value));