let spaceship = "Helmit"
let newSpaceship = ""

for (let index = 0; index < spaceship.length; index++) {
    if (spaceship[index] == "e") {
        newSpaceship += "i"
    } else {
        newSpaceship += spaceship[index]
    }
}

alert(newSpaceship)