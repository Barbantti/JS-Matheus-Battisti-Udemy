//criar uma classe que simule um carrinho de compras de um e-commerce;
//propriedades: quantidade total, valor
//crie os métodos para adicionar e remover itens;

//objeto pai
class Cart {
  constructor(itens, qtd, totalValue) {
    this.itens = itens;
    this.qtd = qtd;
    this.totalValue = totalValue;
  }

  addItem(item) {
    let count = 0;

    for (let cartContent in this.itens) {
      if (this.itens[cartContent].id == item.id) {
        this.itens[cartContent].qtd += item.qtd;
        count = 1;
      }
    }

    if (count == 0) {
      this.itens.push(item);
    }

    this.qtd += item.qtd;
    this.totalValue += item.price * item.qtd;
  }

  removeItem(item) {
    for (let cartContent in this.itens) {
      if (this.itens[cartContent].id == item.id) {
        let obj = this.itens[cartContent];
        let index = this.itens.findIndex(function (obj) {
          return obj.id == item.id;
        });

        this.qtd -= this.itens[cartContent].qtd;
        this.totalValue -=
          this.itens[cartContent].price * this.itens[cartContent].qtd;

        this.itens.splice(index, 1);
      }
    }
  }
}

let cart = new Cart(
  [
    {
      id: 0o1,
      productName: "T-shirt",
      qtd: 1,
      price: 20,
    },
    {
      id: 0o2,
      productName: "Pants",
      qtd: 2,
      price: 50,
    },
  ],
  3,
  120
);

console.log(cart);

cart.addItem({ id: 0o1, productName: "T-shirt", qtd: 2, price: 20 });

console.log(cart);

cart.addItem({ id: 0o2, productName: "Pants", qtd: 2, price: 50 });

cart.addItem({ id: 0o3, productName: "Cap", qtd: 1, price: 15 });

console.log(cart);

cart.removeItem({ id: 0o1, productName: "T-shirt", qtd: 1, price: 20 });

console.log(cart);