//Mouse movement

/* 
--Pode-se ativar com a movimentação do mouse também;

--Utilizando o "mousemove";

--Através desse evento pode-se detectar a posição do ponteiro do mouse na tela.
*/
window.addEventListener("mousemove", function(e) {

  console.log(e.x);
  console.log(e.y);

});

window.addEventListener("scroll", function(e) {

  if(window.scrollY > 1000) {

    console.group("ativou");

  }
})

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector('#btn2')

btn1.addEventListener("mousedown", function() {
  console.log("Apertou o botão");
});

btn1.addEventListener("mouseup", function() {
  console.log("Soltou o botão");
});

btn2.addEventListener("dblclick", function() {
  console.log("Clicou duas vezes");
});

/* btn2.addEventListener("contextmenu", function(e) {

  e.preventDefault();
  console.log("Botão direito");
}) */