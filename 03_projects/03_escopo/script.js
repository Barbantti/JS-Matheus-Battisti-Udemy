let y = 10 //declaração com escopo global.

function imprimir() {
    let y = 150; //declaração com escopo local.
    
    console.log(y);
}

imprimir();

console.log(y);