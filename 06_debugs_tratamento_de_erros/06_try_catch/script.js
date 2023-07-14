//Try catch
/* 
--O bloco try catch, vai tentar executar um código, caso nao consiga ele pode retornar o erro que esse código gerou;
--Extremamente util para realizar debugs;
*/
let b = 2;


try {
  
  let a = 2 + b;

} catch (error) {
  
  console.log(error);

}

console.log("teste");