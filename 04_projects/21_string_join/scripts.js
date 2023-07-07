let frase = "Testando método split";

let palavras = frase.split(" ");

let novaFrase = palavras.join("@");

console.log(novaFrase);

console.log(palavras.join(" "));



// join ==> junta elementos em um array em uma frase, por meio de um separador(basicamente e o oposto do split);