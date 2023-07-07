let pessoa = {
  "nome": "Leonardo",
  "idade": 28,
  "profissao": "Programador",
  "hobbies": ["CS:GO", "Assistir videos", "Passear"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);

// json (JavaScript Object Notation)==> Utilizado para comunicação entre serviços, ex: back end <-> front end;
