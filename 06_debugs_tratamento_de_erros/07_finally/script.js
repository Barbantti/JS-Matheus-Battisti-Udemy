//finally
/* 
--Finally e executada independente do resultado do try/catch;
--E pode ser utilizado com try/catch ou apenas com o try;
*/
let b = 2;


try {
  
  let a = 2 + b;

} catch (error) {
  
  console.log(error);

} finally {

  console.log("Executou")

}

//console.log("teste");