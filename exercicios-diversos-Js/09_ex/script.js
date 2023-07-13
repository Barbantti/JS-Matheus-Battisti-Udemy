//crie uma classe conta bancaria;
//com as propriedades de saldo na conta corrente, saldo na conta poupança e juros da poupança;
//crie os métodos de deposito e saque, também um método para transferir dinheiro da poupança para a corrente;
//crie uma conta especial que herda da conta normal;
//na conta especial os juros sao dobrados da conta normal;
//(this === objeto)
//objeto pai
class Conta {
  constructor(saldoCC, saldoCP, juros) {
    this.saldoCC = saldoCC;
    this.saldoCP = saldoCP;
    this.juros = juros;
  }
  //método ==> deposito
  deposito(valor) {
    this.saldoCC += valor;
  }
  //método ==> saque
  saque(valor) {
    this.saldoCC -= valor;
  }
  //método ==> transf conta poupança
  transferenciaCP(valor) {
    this.saldoCC -= valor;
    this.saldoCP += valor;
  }
  //método ==> transf conta corrente
  transferenciaCC(valor) {
    this.saldoCP -= valor;
    this.saldoCC += valor;
  }
  //método ==> juros de aniversario
  jurosDeAniversario() {
    let juros = (this.saldoCP * this.juros) / 100;
    this.saldoCP += juros;
  }
}

//objeto filho de: objeto pai
class ContaEspecial extends Conta {
  //recebe os valores normais do objeto pai
  constructor(saldoCC, saldoCP, juros) {
    //super ==> define a propriedades da class Conta (objeto pai)
    super(saldoCC, saldoCP, juros*2)

  }
}

//instance class Conta (objeto pai)
let conta = new Conta(1000, 5000, 1);

console.log(conta);

conta.saque(500);

console.log(conta);

conta.deposito(5000);

console.log(conta);

conta.transferenciaCP(3000);

console.log(conta);

conta.jurosDeAniversario();

console.log(conta);

//instance class ContaEspecial extends from Conta  (objeto pai)

let conta2 = new ContaEspecial(10000, 50000, 1);

console.log(conta2);

conta2.saque(5000);

console.log(conta2);

conta2.jurosDeAniversario();

console.log(conta2);