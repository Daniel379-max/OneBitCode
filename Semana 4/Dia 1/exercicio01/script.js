class SpacialStation {
    constructor(name, crewQuantity) {
        this.name = name;
        this.crewQuantity = crewQuantity;
        this.isHitched = false;
        this.doorsOpen = false;
    }
    hitch() {
        this.isHitched = true;
        this.doorsOpen = true;
    }
}

function showMenu() {
    let choseOption
    while (choseOption != "1" && choseOption != "2" && choseOption != "3") {
        choseOption = prompt("O que deseja fazer?\n" +
            "1- Engatar nave\n" +
            "2- Imprimir naves\n" +
            "3- Sair do programa")
    }
    return choseOption
}

function createSpaceship() {
    let spaceshipName = prompt("Informe o nome da nave: ");
    let quantity = prompt("Informe o número de tripulantes: ");
    let spaceship = new Spaceship(spaceshipName, quantity)
    return spaceship
}

function printSpaceShip(spaceships) {
    let spaceshipList = "";
    spaceships.forEach((spaceship, index) => {
        spaceshipList += (index + 1) + "- " + spaceship.name + " (" + spaceship.quantity + " tripulantes)\n"
    })
    alert(spaceshipList)
}


let hitchedSpaceships = []

let choseOption

while (choseOption != "3") {
    choseOption = showMenu()
    switch (choseOption) {
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch()
            hitchedSpaceships.push(spaceshipToAdd)
            break;
        case "2":
            printSpaceShip(hitchedSpaceships)
            break;
        default:
            break;
    }
}