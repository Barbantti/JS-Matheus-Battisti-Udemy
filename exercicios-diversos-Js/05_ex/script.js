//crie uma classe que simula uma conta no banco
//deve conter a propriedade saldo
//e os métodos deposito e saque;
//teste os métodos


//objeto pai
class Conta {
  constructor(saldo) {
    this.saldo = saldo;
  }
  
  deposito(valor) {
    this.saldo += valor;
  }

  saque(valor) {
    this.saldo -= valor;
  }

}

let conta = new Conta(1000);

conta.deposito(1000);

console.log(conta.saldo);

conta.saque(500);

console.log(conta.saldo);