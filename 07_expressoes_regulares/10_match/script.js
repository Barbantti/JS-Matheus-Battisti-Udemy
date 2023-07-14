//Método match

/* 
--O Método match funciona de forma similar ao exec porem pouco usado;
*/

const frase = "O numero 100 esta aqui".match(/\d+/);
const frase2 = "O numero esta aqui".match(/\d+/);
//true
console.log(frase);
//null
console.log(frase2);