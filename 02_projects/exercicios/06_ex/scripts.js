let age = prompt("Qual é a sua idade?")
let cnh = prompt("Voce tem CNH? [s/n]")

if(age >= 18 && cnh == "n") {
    window.alert("Voce ja tem a idade permitida para tirar a CNH!")
} else if(age >= 18 && cnh == "s") {
    window.alert("Voce ja tem a idade permitida e a CNH!")
} else {
    window.alert("Voce não tem a idade permitida para tirar a CNH!")
}