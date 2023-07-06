function loop(x) {
  for(let i = x; i >= 0; i--) {
    if(i % 2 == 0) {
      console.log(i);
    }
  }
}

loop(20);
loop(10);
loop(5);

function faixaEtaria(idade) {
    
  if(idade < 12) {
      return "Criança";
  } else if(idade >= 12 && idade <= 24) {
      return "Jovem";
  } else {
      return "Adulto";
  }

}

const idadeCrianca = 8
const crianca = faixaEtaria(idadeCrianca);
console.log(crianca);

const idadeAdulto = 34
const adulto = faixaEtaria(idadeAdulto);
console.log(adulto);

function isPalindrome(palavra) {
  const palavraInvertida = palavra.split('').reverse().join('');
  return palavra === palavraInvertida;
}

console.log(isPalindrome('radar')); //true
console.log(isPalindrome('hello')); //false

function calculateAverage(numbers) {
  const total = numbers.length;

  if (total === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < total; i++) {
    sum += numbers[i];
  }

  const average = sum / total;
  return average;
}

// Example usage of the function
const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);
console.log(average);  // 3

const emptyArray = [];
const averageEmpty = calculateAverage(emptyArray);
console.log(averageEmpty);

function reverseString(string) {
  return string.split('').reverse().join('');
}

const palavra = "hello";
const palavraInvertida = reverseString(palavra);
console.log("palavraInvertida: ",palavraInvertida)

function countVowels(string) {

}

function countVowels(palavra) {

  let totalVogais = 0;
  let vogais = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < palavra.length; i++) {
    if(vogais.indexOf(palavra[i]) != -1) {
      totalVogais++;
    }
  }

  return totalVogais;
}

const palavras = "teste de vogais"
countVowels(palavras);

console.log("Numero de vogais: ",countVowels(palavras));


function sumEvenNumbers(num) {

  const total = num
  let soma = 0;
  total.forEach(parImp => {
   
    if(parImp % 2 === 0){

      soma += parImp
      
    }
  });
  return soma;
}


const num = [1,3,4,6,8,12,14,33,24];
const par = sumEvenNumbers(num);
console.log("Total par: ", par);
console.log("sumEvenNumbers(num): ", sumEvenNumbers(num));
