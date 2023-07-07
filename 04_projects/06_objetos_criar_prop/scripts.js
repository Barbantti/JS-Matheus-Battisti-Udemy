let pessoa = {
  nome: "Leonardo",
  idade: 28,
  profissao: "Programador",
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = true;

pessoa.nome = "Leonardo";

console.log(pessoa.nome);

console.log(pessoa.casado);

console.log(pessoa)

// [] ==> array;
// {} ==> obj