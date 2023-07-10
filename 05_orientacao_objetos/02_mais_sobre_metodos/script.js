//normalmente os métodos interagem com os objetos;
//ate mudando os valores das suas propriedades para corresponder a logica do programa desenvolvido;

const cachorro = {
  raca: 'SRD',
  uivar: function() {
    console.log("Auuuuuuuuuuuu");
  },
  rosnar: function() {
    console.log("grrrrrrr");
  },
  setRaca: function(raca) {
    this.raca = raca;
  },
  getRaca: function() {
    return "A raca e " + this.raca;
  }
};
console.log((cachorro.raca));
(cachorro.setRaca('Labrador'));
console.log(cachorro.raca);
console.log(cachorro.getRaca())
//(cachorro.uivar());
//(cachorro.rosnar());