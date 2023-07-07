let bus = {
  rodas: 8,
  lmtPass: 40,
  portas: 2
};

console.log(bus.rodas);
console.log(bus.lmtPass);
console.log(bus.portas);

delete bus.rodas;

bus.janelas = 20;

console.log(bus.rodas);
console.log(bus.janelas)
console.log(bus);