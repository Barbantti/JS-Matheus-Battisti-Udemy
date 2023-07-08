//Calculadora console

const dados = {
  somar: function(val1, val2) {
     
    return val1 + val2;
  },
  subtrair: function(val1, val2) {
     
    return val1 - val2;
  },
  multiplicar: function(val1, val2) {
     
    return val1 * val2;
  },
  dividir: function(val1, val2) {
     
    return val1 / val2;
  }
};

function calculadora(val1, val2, opr) {
  let res;
    if(opr === "somar") {
      res = val1 + val2;
    } if( opr === "subtrair") {
      res = val1 - val2;
    } if(opr === "multiplicar") {
      res = val1 * val2;
    } if(opr === "dividir") {
      res = val1 / val2;
    }
    return res;
}
let opr = "dividir";
let val1 = 58;
let val2 = 2;
const calc = calculadora(val1, val2, opr);
console.log(opr, calculadora(val1, val2, opr),";");