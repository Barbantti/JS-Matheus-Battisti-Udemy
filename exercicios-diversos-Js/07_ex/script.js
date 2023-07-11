//criar um objeto que simule um endereço de um cliente;
//propriedades: Rua, Bairro e Estado;
//no construtor o endereço ja deve ser definido por completo;
//criar métodos para atualizar todas as propriedades,

//objeto pai
class Address {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  set novaRua(novaRua) {
    this.rua = novaRua;
  }

  set novoBairro(novoBairro) {
    this.bairro = novoBairro;
  }

  set novaCidade(novaCidade) {
    this.cidade = novaCidade;
  }

  set novoEstado(novoEstado) {
    this.estado = novoEstado;
  }


}
//instance
let address = new Address("Avenida Paulista, 1754", "Consolação", "São Paulo", "SP");

console.log(address)
//atualizando com novos dados
address.novaRua = "Rua dos pardais, 178";

console.log(address)

address.novoBairro = "Jardim dos Pássaros";

console.log(address);

address.novaCidade = "Jacaré Págua";

console.log(address);

address.estado = "Rio de Janeiro";