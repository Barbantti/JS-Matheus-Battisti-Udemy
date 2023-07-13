/* Sistema de Biblioteca
Crie uma classe chamada "Livro" que representa um livro em um sistema de biblioteca.

A classe deve ter os seguintes atributos:

titulo: representando o título do livro (string).

autor: representando o autor do livro (string).

disponível: representando a disponibilidade do livro (boolean).

A classe deve ter os seguintes métodos:

emprestar(): verifica se o livro está disponível para empréstimo e, se estiver, atualiza a disponibilidade para false.

devolver(): verifica se o livro não está disponível para empréstimo e, se não estiver, atualiza a disponibilidade para true.

consultarDisponibilidade(): retorna a disponibilidade atual do livro. */

class Livro {
  constructor(titulo, autor, disponivel) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = disponivel;
  }
  //retorna o titulo do livro.
  tituloDoLivro() {
    return this.titulo;
  }
  //retorna o autor do livro.
  autorDoLivro() {
    return this.autor;
  }
  // verifica se o livro está disponível para empréstimo e, se estiver, atualiza a disponibilidade para false.
  emprestar() {
    if (this.disponivel) {
      this.disponivel = false;
      return "Livro emprestado com sucesso!";
    } else {
      throw new Error("Livro indisponível para empréstimo!");
    }
  }
  //verifica se o livro não está disponível para empréstimo e, se não estiver, atualiza a disponibilidade para true.
  devolver() {
    if (!this.disponivel) {
      this.disponivel = true;
      return "Livro devolvido com sucesso!";
    } else {
      throw new Error("Livro já está disponível");
    }
  }
  //retorna a disponibilidade atual do livro.
  consultarDisponibilidade() {
    if (this.disponivel) {
      return "Disponível";
    } else {
      return "Indisponível";
    }
  }
}

let livro = new Livro("Qualquer", "Tanto faz", false);

console.log(livro);

console.log("Titulo do livro:", livro.tituloDoLivro());
console.log("Autor do livro:", livro.autorDoLivro());
console.log("Titulo esta disponível?", livro.consultarDisponibilidade());
//Livro indisponível para empréstimo.
try {
  console.log(livro.emprestar());
} catch (error) {
  console.log("Erro:", error.message);
}

console.log(livro.devolver());
console.log(livro.consultarDisponibilidade());