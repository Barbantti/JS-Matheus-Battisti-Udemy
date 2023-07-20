//Generator
/* 
--Generators funcionam de forma semelhante a promise;

--Onde acoes podem ser pausadas e continuadas depois;

--Caracterizados pelo function* e yield;

--O yield pode salvar o estado da variável;
*/

function* criadorId() {
  let id = 0;
  while(true) {
    yield id++;
  }
}

let criaId = criadorId();

console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);

console.log(criaId.next().value);
console.log(criaId.next());