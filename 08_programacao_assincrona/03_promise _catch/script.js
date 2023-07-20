//Promise catch
/* 
--Uma promise pode falhar, pode-se reter esse erro com um método parecido com o try catch, porem neste caso sera o promise the catch;

--Com ele se torna possível exibir o erro no console, por exemplo, e fazer o debug no código;
*/

let p = Promise.resolve(new Error("Nao deu certo"));

console.log("Outros códigos...")

p.then(value => console.log(value))
.catch(reason => console.log("Falhou:" + reason));