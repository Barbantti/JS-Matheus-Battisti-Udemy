//input por função
/* 
--Utilizado para tratar dados que vem do usuário, para aproveita-lo de uma maneira melhor.
*/


function checarNumero(num) {
  let number = Number(num);
  if(Number.isNaN(number)) {
    alert("Por favor, insira apenas numero no programa.")
  } else {
    return number;
  }
}


//console.log(checarNumero(5));
//checarNumero("teste");

let number = prompt("Digite um numero");

checarNumero(number);