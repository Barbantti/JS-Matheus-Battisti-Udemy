// métodos
// propriedades que servem como funções ou seja, acoes dos objetos;
//invoca-se os métodos da mesma maneira que as funções;

/*ex:
let cachorro = {
  latir: function() {
    console.log("Au au");
  }
}
cachorro.latir();
*/

const cachorro = {
  uivar: function() {
    console.log("Auuuuuuuuuuuu");
  },
  rosnar: function() {
    console.log("grrrrrrr");
  }
};

(cachorro.uivar());
(cachorro.rosnar());