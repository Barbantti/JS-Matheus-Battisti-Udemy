const calculadora = {
  somar: function(n1, n2) {
    return n1 + n2;
  },
  subtrair: function(n1, n2) {
    return n1 - n2;
  },
  multiplicar: function(n1, n2) {
    return n1 * n2;
  },
  dividir: function(n1, n2) {
    return n1 / n2;
  }
};

function calcular(n1, n2,tipo) {
let total;
if(tipo === "somar") {
  total = n1 + n2;
}
  if(tipo === "subtrair") {
    total = n1 - n2;
  }
    if(tipo === "multiplicar") {
      total = n1 * n2; 
    }
      if(tipo === "dividir") {
        total = n1 / n2;  
      }
      return total;
}
let n1 = 1;
let n2 = 3; 
let tipo = "multiplicar";
console.log(tipo, calcular(n1,n2,tipo));