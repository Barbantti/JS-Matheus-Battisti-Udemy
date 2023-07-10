//Remover elementos duplicados de um array

function removeDuplicates(array) {
  let uniqueArray = [];

  //percorre o array original
  for(let i = 0; i < array.length; i++) {
    let currentItem = array[i];

    //verifica se o elemento ja esta no novo array (uniqueArray[])
    if(uniqueArray.indexOf(currentItem) === -1) {
      uniqueArray.push(currentItem);
    }
  }
  return uniqueArray;
}

let array = [1,1,1,3,4,5,6,7,7];
console.log("Array antes de remover os duplicados:", array);
let result = removeDuplicates(array);
console.log("Array apos remover os num duplicados:", (result));