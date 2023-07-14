//exceptions
/* 
--Pode criar erros no programa, caso alguma condição nao seja atendida.
--Porem as exceptions abortam o programa, so geram o erro.
*/


function saudacao(nome) {
  if(typeof nome != "string") {
    throw new Error("O parâmetro nome precisa ser uma string");
  } else {
    console.log(`Ola ${nome}.`);
  }
}

saudacao("Leonardo");
saudacao(5);

console.log("Teste");