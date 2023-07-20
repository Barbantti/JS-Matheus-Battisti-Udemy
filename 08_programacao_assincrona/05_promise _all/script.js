//Promises all
/* 
--Com o método all, pode-se resolver varias promessa de uma única vez;

--Ou seja passamos elas por array e quando a ultima for resolvida, recebe-se a resposta;
*/

const p1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("p1");
  }, 5000);
});

const p2 = Promise.resolve("p2");

const p3 = new Promise((resolve, reject) => {
  resolve("p3");
});

Promise.all([p1,p2,p3]).then((values) => console.log(values));