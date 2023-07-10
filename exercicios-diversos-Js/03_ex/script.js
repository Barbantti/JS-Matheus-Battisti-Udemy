//sumUniqueNumbers

function sumUniqueNumbers(array) {
  let diff = {};
  let soma = 0;

  //contagem dos numeros no array
  for(let i = 0; i < array.length; i++) {
    let n = array[i];
    diff[n] = (diff[i] || 0) + 1;
  }

  //soma dos numeros unicos que ocorrem uma unica vez
  for (let i = 0; i < array.length; i++) {
     let n = array[i];
     if(diff[n] === 1) {
      soma += n;
    }     
  }

  return soma;
};

var array1 = [1, 2, 3, 2, 4, 5, 1, 4, -1, -1, 6];
console.log(sumUniqueNumbers(array1)); // Saída: 13 (3 + 5 + 6)

var array2 = [0, 0, 0, 0, 0, 0, 0, 1];
console.log(sumUniqueNumbers(array2)); // Saída: 1 (1)

var array3 = [-4, -4, -4, -1];
console.log(sumUniqueNumbers(array3)); // Saída: -1 (-1)