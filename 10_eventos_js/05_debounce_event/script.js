//Debounce event

/* 
--Um evento que dispara múltiplas vezes pode ser um problema para o computador do cliente;

--Por isso pode-se fazer um debounce, que e suavizador de evento, para nao chamar o mesmo tantas vezes;
 */
let timeout;

window.addEventListener("mousemove", function(e) {
  clearTimeout(timeout);
  setTimeout(function() {
    console.log(e.x);
  }, 500)
})