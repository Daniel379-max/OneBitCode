let spaceship = prompt('Qual o nome da nave? ')
let letra = prompt('Qual letra você escolhe para parar? ')

let invert = ""

for (let index = spaceship.length - 1; index >= 0; index--) {
    if (spaceship[index] == letra) {
        break
    }
    invert += spaceship[index]
}
alert("Nome original da nave: " + spaceship + "\nNome após ocultação: " + invert)