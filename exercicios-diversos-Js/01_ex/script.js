console.log("Voce e mais forte e capaz do que parece, stay focused!")

function cubo(base,exp){

  const cubo = Math.pow(base,exp);
  console.log("cubo: ", cubo);
  return cubo

}

let base = 3;
let exp = 5;
const baseExp = cubo(base,exp);


function temp(faCel){
  const conv = Math.trunc((faCel -32) / 1.8); 
  console.log(`Convertendo de Fahrenheit ${faCel} graus para ==> Celsius ${conv} graus.`)
  return conv
}

let faCel = 84;
const conversor = temp(faCel);


function area(circ,){
const raio = Math.PI * Math.pow(circ, 2);
console.log("raio: ", raio)
return raio
}
let circ = 15;
const raioMed = area(circ);

function inverte(invNum){
let val = invNum.toString();
let aux = "";
  for(let i = val.length; i > 0; i--){
    aux += val[i -1];
  }
  console.log("Valor invertido e: ", parseInt(aux));
  return parseInt(aux);
}
let invNum = 598;
const inversor = inverte(invNum);

function vogais(vog){
  let totVogais = 0;
  let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for(let i = 0; i < vog.length; i++){
      if(vogais.indexOf(vog[i]) != -1){
        totVogais++;
      }
    }
    console.log("Total de vogais:", totVogais);
    return totVogais;
}
let vog = "Beterraba"
const striVal = vogais(vog);

function invest(valor,tempo){
  const val = valor;
  const temp = tempo;
  const taxa = 0.08;

  let valInvest = val * taxa * temp;
  let montante = val + valInvest
  console.log(`Valor total do investimento e de R$${montante} em ${temp} meses!`);
  return montante
}
let valor = 5000;
let tempo = 10;
const valTemp = invest(valor,tempo);


function fatorial(fat){
  aux = 0;
  if(fat < 0){
    return -1;
  } else if(fat == 0){
    return 1;
  } else {
    aux = (fat * fatorial(fat - 1));
    console.log("Numero fatorial e: ", aux);
    return aux;
  }
}
let fat = 10;
const numFat = fatorial(fat);


function contadorLetras(palavra,caractere){
  const letra = caractere;
  let letFra = 0;
  
  for(let i = 0; i < palavra.length; i++){
    if(palavra[i].toLowerCase() == letra){
       letFra ++;
    }
  }
  console.log("Total de letras iguais: ", letFra)
  return letFra
}
let palavra = "Jaca"
let caractere = "a"
const contLet = contadorLetras(palavra,caractere);

// function numeroPrimo(numPri){
//   const numero = numPri
//     if(numero % 2 == 0){
//       console.log(window.alert("Este numero nao e primo!"));
//     } else {
//       console.log(window.alert("Este numero e primo!"));
//     }
//     return numero
// }

// let numPri = window.prompt("Digite um numero para saber se ele e primo ou nao!");

// const priNumero = numeroPrimo(numPri)

  // imprimir numeros de 1 a 10.
  for(i = 0; i <= 10; i++){
    console.log("res: ", i);
  }

  function valImp(){
    for(let i = 1; i < 100; i+=2){
      console.log("Valor Impar abaixo de 100: ", i);
    }
    return i;
  }
let imp = 20;
const impVal = valImp(imp);


function tabuada(){
  const tabu = 8;
  for(let i = 1; i <= 10; i++){
    const res = tabu * i;
    console.log("tabuada: ", tabu + " x " + i + " = " + res);
  }
}
tabuada();

function todasTabuadasDo1Ao10(n){
  for(let i = 1; i <= 10; i++){
    const resTabu = n * i;
    console.log("tabuada do " + n + " e: " + n + " x " + i + " = " + resTabu);
  }
}
let numTabu = 3;
const qualTabu = todasTabuadasDo1Ao10(numTabu);


function somaDo1Ao10(){
  let sum = 0;
  for(let i = 1; i <= 10; i++){
    sum += i;
    console.log("soma do 1 ao 10: ", sum);
  }
}
somaDo1Ao10();

function porcentagem(numP,porN){
  return (numP/100)*porN;
}
let porN = 60;
let numP = 300;
const porNum = porcentagem(numP,porN);
console.log("porcentagem: ", porcentagem(numP,porN));


function somaMaior10Menor30(){
  let somaMn = 0;
  for(let i = 11; i <= 30; i+=2){
    somaMn += i;
    console.log("Soma: ", somaMn);
  }
}
somaMaior10Menor30();

function numeArr(ar){
  let sAr = 0;
  for(let i = 0; i <ar.length; i++){
    sAr += ar[i]
  }
  return sAr;
}
let array = [2,5,4,9,3,7,8,1,4,3];
const infArr = numeArr(array);
console.log("Soma do array: ", numeArr(array));

function mediaArr(ar){
  let nArray = ar.length;
  let soArr = 0;
    for(let i = 0; i < nArray; i++){
      soArr += ar[i];
    }
    return soArr/nArray;
}
let ar = [1,3,5,7,9,4,2,6,8,90];
const medAr = mediaArr(ar);
console.log("media Array: ", medAr);



const arr = [1, 2, 3, 4]
let qty = arr.length;
let el = arr[2];
console.log(qty);
console.log(el);

const arrAy = [];
for(let i = 0; i < 5; i++) {
  let el = i + 5;
  arrAy.push(el);
}
console.log(arrAy);


function findMaxNumber(arr) {
  if(arr.length === 0) {
    return null;
  }

  let max = arr[0];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let nuArray = [5, 8, 2, 10, 3];
let maiorNum = findMaxNumber(nuArray);
console.log(maiorNum);