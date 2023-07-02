let nome = "Leonardo";

// Modo switch/case

switch(nome) {
    case "Leonardo":
    console.log("O nome é Leonardo!")
    break;
    case "João":
        console.log('O nome é João!')
        break
        default:
            console.log("O nome não foi encontrado!")
}

// Modo if/else (muito melhor e economiza linhas no código!)

if(nome == "Leonardo") {
    console.log("O nome é Leonardo!")
} else {
    console.log("O nome não foi encontrado!") 
}