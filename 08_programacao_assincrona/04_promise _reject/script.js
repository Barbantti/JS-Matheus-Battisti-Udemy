//Promises reject
/* 
--Além do resolve, ha o método reject;

--Que e quando determinada logica nao satisfaz o programa, então pode ir para outra com o reject, em vez do resolve;

--Resolve e reject terminam a Promise, ou seja, nao pode chamar mais o then, por exemplo;
*/

function verificarNumero(num) {
  return new Promise((resolve, reject) => {
    if(num == 2) {
      resolve(console.log(`O numero e ${num}`));
    } else {
      reject(console.log(new Error("Falhou")));
    }
  });
}

verificarNumero(2);
verificarNumero(3);