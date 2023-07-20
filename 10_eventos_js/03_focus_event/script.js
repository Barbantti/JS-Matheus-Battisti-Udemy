//Focus event

/* 
--Quando se foca em um elemento ou sai dele, pode-se também atrelar um evento a esta ação;

--Focus para quando um elemento recebe foco e blur quando ele perde;
*/

let input = document.querySelector("#input2");

input.addEventListener("focus", function() {
  console.log("Entrou no input");
});

input.addEventListener("blur", function() {
  console.log("Saiu do input");
});