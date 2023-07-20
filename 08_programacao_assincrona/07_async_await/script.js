//Async await
/* 
--Nas async functions, pode-se determinar uma instrução await;

--Que vai esperar uma promise ser resolvida, para apresentar os resultados;

--Como por exemplo em um web site com vários bancos de dados e api's, dados solicitados no front-end demoram pra ser buscados no back-end e retornados aos front, se nao tiver um async await certamente o front nao ira aguarda o retorno demorado do back e ira resultar em erros como "undefined" ou "NaN" para o usuário. Deste modo o async await fazem o código aguardar o retorno do dado solicitado para então continuar executando o código. Isto também e valido para evitar execuções desnecessárias de api's de forma repetidas na GCP.
*/

function somaComDelay(a,b) {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(a+b);
    }, 4000);
  })
};

async function resSoma(a,b,c) {

  let x = somaComDelay(a,b);
  let y = c;

  return await x + y;
}

resSoma(1,2,3).then(value => console.log(value));