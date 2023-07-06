let x = 10 //declaração com escopo global.

if(x > 5) {
    let x = 20;
    x++; //declaração com escopo local.
    
    console.log(x);
}

console.log(x);