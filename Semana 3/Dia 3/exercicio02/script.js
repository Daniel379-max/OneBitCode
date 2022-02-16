let spaceship = prompt("Informe o nome da nave: ")
let char = prompt("Informe o caracter deseja substituir: ")
let newChar = prompt("Informe o outro caracter que deseja substituir: ")
let newSpaceship = ""

for (let index = 0; index < spaceship.length; index++) {
    if (spaceship[index] == char) {
        newSpaceship += newChar
    } else {
        newSpaceship += spaceship[index]
    }
}

alert("Novo nome da nave: " + newSpaceship)