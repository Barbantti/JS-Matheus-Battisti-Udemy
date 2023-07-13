// Crie uma classe chamada WordCounter que representa um contador de palavras.

// A classe deve ter um construtor que inicializa um objeto vazio.

// A classe deve ter um método chamado countWords que recebe uma string como parâmetro.

// O método countWords deve contar o número de palavras na string fornecida e retornar o resultado.

// Considere que as palavras são separadas por espaços em branco.

/* class WordCounter {

  constructor() {

  }

  countWords(text) {

    let newWord = "";

    let numLetters = 0;

    for (let i = 0; i < text.length; i++) {
      if (text[i] == " ") {
        newWord += text[i];
      }
    }

    for (let i = 0; i < newWord.length; i++) {
      numLetters++;
    }

    return numLetters + 1;

  }
}
//instance
const wordCounter = new WordCounter();

let texto = "Ola tudo bem?";

let numTexto = wordCounter.countWords(texto);

console.log("Numero de palavras:", numTexto); */

class WordCounter {
  constructor() {
    // O construtor não requer nenhuma inicialização específica para o objeto vazio
  }

  countWords(text) {
    let trimmedText = text.trim(); // Remove espaços em branco no início e no final da string
    if (trimmedText === "") {
      return 0; // Retorna 0 se a string estiver vazia
    }
    let words = trimmedText.split(/\s+/); // Divide a string em palavras usando espaços em branco como separadores
    return words.length;
  }
}

// Exemplo de uso
const wordCounter = new WordCounter();
let texto = "Ola tudo bem?";
let numPalavras = wordCounter.countWords(texto);
console.log("Numero de palavras:", numPalavras);


