/* Conta Bancária
Crie uma classe chamada "ContaBancaria" que representa uma conta bancária.

A classe deve ter os seguintes atributos:

numeroConta: representando o número da conta (string ou número).

saldo: representando o saldo da conta (número).

A classe deve ter os seguintes métodos:

depositar(valor): recebe um valor como parâmetro e adiciona esse valor ao saldo da conta.

sacar(valor): recebe um valor como parâmetro e verifica se o saldo é suficiente para efetuar o saque. Se for, realiza o saque subtraindo o valor do saldo. Caso contrário, exibe uma mensagem informando que o saldo é insuficiente.

consultarSaldo(): retorna o saldo atual da conta. */
/*
class ContaBancaria {
  constructor(numeroConta, saldo) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  }
  //representando o número da conta.
  numConta() {
    this.numeroConta;

    return this.numeroConta;
  }
  //recebe um valor como parâmetro e adiciona esse valor ao saldo da conta.
  depositar(valor) {
    this.saldo = valor;
    this.deposito = this.saldo;

    return this.deposito;
  }
  //recebe um valor como parâmetro e verifica se o saldo é suficiente para efetuar o saque.
  sacar(valor) {
    this.saque = valor;

    if (this.saque > this.saldo || this.saque <= 0) {
      console.log(`Saldo insuficiente, seu saldo atual e: ${this.saldo}`);
    } else {
      this.saque;

      return this.saque;
    }
  }
  //retorna o saldo atual da conta.

  consultaSaldoDeposito(novoSaldoDeposito) {
    let cont = 0;
    if (novoSaldoDeposito !== this.deposito) {
      novoSaldoDeposito = cont + this.deposito;

      return novoSaldoDeposito;
    }
  }

  consultarSaldo(novoSaldo) {
    if (novoSaldo !== this.saldo) {
      novoSaldo = this.saldo - this.saque;

      return novoSaldo;
    }
  }
}

//instance
let conta = new ContaBancaria("024.745-6", 0);

let numeroDaConta = conta.numConta();

let realizarDeposito = conta.depositar(6600);

let realizarSaque = conta.sacar(4250);

let verSaldoDeposito = conta.consultaSaldoDeposito();

let verSaldo = conta.consultarSaldo();

//console.log(conta);

console.log(
  `Cliente da conta bancaria:${numeroDaConta}, depositou R$${realizarDeposito} reais e seu saldo agora e R$${verSaldoDeposito} reais.`
);

console.log(
  `Cliente da conta bancaria:${numeroDaConta}, sacou R$${realizarSaque} reais e seu saldo agora e R$${verSaldo} reais.`
);*/

class ContaBancaria {
  constructor(numeroConta, saldo) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  }

  numConta() {
    return this.numeroConta;
  }

  depositar(valor) {
    this.saldo += valor; // Somando o valor ao saldo existente
    return this.saldo;
  }

  sacar(valor) {
    if (valor > this.saldo || valor <= 0) {
      console.log(`Saldo insuficiente, seu saldo atual é: ${this.saldo}`);
    } else {
      this.saldo -= valor;
      return valor;
    }
  }

  consultarSaldo() {
    return this.saldo;
  }
}

// Exemplo de uso
let conta = new ContaBancaria("024.745-6", 0);
let numeroDaConta = conta.numConta();
let realizarDeposito = conta.depositar(6600);
let realizarSaque = conta.sacar(6250);
let verSaldo = conta.consultarSaldo();

console.log(
  `Cliente da conta bancária ${numeroDaConta} depositou R$${realizarDeposito} reais e seu saldo agora é R$${verSaldo} reais.`
);

console.log(
  `Cliente da conta bancária ${numeroDaConta} sacou R$${realizarSaque} reais e seu saldo agora é R$${verSaldo} reais.`
);