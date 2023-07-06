function soma(a,b) {

    if(a === undefined || b === undefined) {
        console.log("Esta função precisa ter os dois argumentos para funcionar!");
    } else {
        return a + b;
    }

}

console.log(soma(1));

console.log(soma(1,2));

function saudacao(nome, idade) {
    if(idade === undefined) {
        console.log("Ola " + nome);
    } else {
        console.log("Ola" + nome + " Voce tem " + idade + " anos!");
    }
}

saudacao("Leonardo");

saudacao(" Heitor,03");