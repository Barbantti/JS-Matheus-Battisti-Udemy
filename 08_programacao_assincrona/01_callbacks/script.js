//Programação Assíncrona callbacks
/* 
--Uma das vertentes a prog.Assíncrona e fazer acoes que aconteçam depois de um tempo por meio de callbacks;

--Callback e uma função que faz uma ação apos algum acontecimento no código;

--Pode-se realizar um callback com a função setTimeout, ex:

--Na prog assíncrona como no exemplo abaixo, vai chamar os dois consoles logs de fora da função (considere como se fosse uma logica), e apos dois segundos a função setTimeout sera chamada de forma assíncrona ou seja, totalmente fora da ordem em que esta escrita no código mas sem atrapalhar a fluidez do programa (nao para o código e aguarda o retorno do dado como e no caso do async await);

console.log("Ainda nao chamou o callback");

setTimeout(function() {

  console.log("Chamou o callback");
}, 2000 (tempo de chamada assíncrona e contada em milissegundos, neste casso 2000 milissegundos na verdade sao 2 segundos apenas));

console.log("Ainda nao chamou o callback");

--A função setTimeout recebe dois parâmetros, um e o parâmetro callback e muitas das vezes o outro parâmetro e outro função que precisa ser chamada de forma assíncrona (fora de ordem);
*/

console.log("1");

setTimeout(function() {

  console.log("5");

}, 2000);

console.log("2");

console.log("3");

console.log("4");