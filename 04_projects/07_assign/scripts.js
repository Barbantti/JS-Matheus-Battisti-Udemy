let carro = {
  portas: 4,
  portamalas: '200l',
  motor: '1.6'
}

let adicionais = {
  tetosolar: false,
  arcondicionado: true,
}

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);
// [] ==> array;
// {} ==> obj