let obj = {
  rodas: 4,
  portas: 4,
  tetosolar: false,
  motor: '1.6'
}

const {rodas: vRodas, portas: VPortas,tetosolar: vTetoSolar, motor: vMotor} = obj;


console.log(vRodas);
console.log(VPortas);
console.log(obj);
// destructuring ==> pode definir variáveis os valores de um array utilizando o destructuring;