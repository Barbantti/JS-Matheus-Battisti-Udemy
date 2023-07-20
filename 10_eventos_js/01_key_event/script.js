//Key event

/* 
--Sempre que uma tecla e pressionada, sao gerados dois eventos: keyup e keydown;

--Keyup e quando solta a tecla;

--Keydown e quando pressiona a tecla.;
*/

window.addEventListener("keydown", function (e) {
  if (e.key == "q") {
    console.log("Apertou a tecla q");
  } else if (e.key == "w") {
    console.log("Pressionou a tecla w");
  }
});

window.addEventListener("keyup", function(e) {
  if (e.key == "q") {
    console.log("Soltou a tecla q");
  }
});