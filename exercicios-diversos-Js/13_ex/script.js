/* Sistema de Reservas de Voo
Crie uma classe chamada "Voo" que representa um voo em um sistema de reservas de voo.

A classe deve ter os seguintes atributos:

codigoVoo: representando o código único do voo (string ou número).

origem: representando a cidade de origem do voo (string).

destino: representando a cidade de destino do voo (string).

assentosDisponiveis: representando a quantidade de assentos disponíveis no voo (número).

A classe deve ter os seguintes métodos:

reservarAssento(): verifica se há assentos disponíveis no voo e, se houver, decrementa a quantidade de assentos disponíveis em um.

consultarAssentosDisponiveis(): retorna a quantidade de assentos disponíveis no voo. */

class Voo {
  constructor(codigoVoo, origem, destino, assentosDisponiveis) {
    this.codigoVoo = codigoVoo;
    this.origem = origem;
    this.destino = destino;
    this.assentosDisponiveis = assentosDisponiveis;
    this.assentosReservados = 0;
  }
  //recebe numero do voo.
  flightNumber() {
    return this.codigoVoo;
  }
  //recebe origem do voo.
  departure() {
    return this.origem;
  }
  //recebe chegada do voo.
  arrival() {
    return this.destino;
  }
  //retorna a quantidade de assentos disponíveis no voo.
  consultarAssentosDisponiveis() {
    return this.assentosDisponiveis;
  }
  //verifica se há assentos disponíveis no voo e, se houver, decrementa a quantidade de assentos disponíveis em um.
  reservarAssento() {
    if (this.assentosDisponiveis > 0) {
      this.assentosDisponiveis--;
      this.assentosReservados++;
      console.log(this.assentosReservados, "Assento(s) reservado com sucesso!");
    } else {
      console.log('Não há assentos disponíveis para reserva.');
    }
  }
  //verifica assentos reservados;
  verificarAssentosReservados() {
    return this.assentosReservados;
  }
  //criar classe filho com 3 clientes
  // criar um if de checagem
  //criar um array no else
}
//instance
//código voo, origem, destino, assentos disponíveis;
let voo = new Voo("GLO1000", "SBSP", "SBRJ", 3);

console.log(voo);

let numeroVoo = voo.flightNumber();

let origem = voo.departure();

let chegada = voo.arrival();

voo.reservarAssento();
voo.reservarAssento();
voo.reservarAssento();

voo.verificarAssentosReservados();

voo.consultarAssentosDisponiveis();

console.log("Numero do voo:", voo.flightNumber());
console.log("Origem:", voo.departure());
console.log("Destino:", voo.arrival());
console.log(
  "Numero de assentos reservados:",
  voo.verificarAssentosReservados()
);
console.log("Assentos disponíveis:", voo.consultarAssentosDisponiveis());