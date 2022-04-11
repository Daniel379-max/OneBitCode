class App {
    constructor() {
        this.spaceship = null
    }
    start() {
        this.enrollSpaceship()
        let chosenOption
        do {
            chosenOption = this.showMenu()
            this.redirectFunction(chosenOption)
        } while (chosenOption != "3")
        this.printAndExit()
    }

    enrollSpaceship() {
        let spaceshipName = prompt("Informe o nome da nave: ");
        let crewQuantity = prompt("Informe o número de tripulantes: ");
        let type = this.askForSpaceshipType()
        if (type == "1") {
            let weaponsQuantity = prompt("Informe o número de armas: ")
            this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, weaponsQuantity)
        } else if (type == "2") {
            let sitsQuantity = prompt("Informe o número de lugares da nave: ")
            this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, sitsQuantity)
        }
    }

    askForSpaceshipType() {
        let chosenOption
        while (!["1", "2"].includes(chosenOption)) {
            chosenOption = prompt("Qual o tipo da nave?\n1- Batalha\n2- Transporte")
        }
        return chosenOption
    }

    showMenu() {
        let promptMessage = "O que deseja fazer?\n" +
            "1- Acelerar a nave\n" +
            "2- Trocar a Nave\n" +
            "3- Imprimir e sair"
        let chosenOption = prompt(promptMessage)
        while (!["1", "2", "3"].includes(chosenOption)) {
            chosenOption = prompt(promptMessage)
        }
        return chosenOption
    }

    redirectFunction(chosenOption) {
        switch (chosenOption) {
            case "1":
                this.accelerateSpaceship()
                break
            case "2":
                this.enrollSpaceship()
                break
        }
    }

    accelerateSpaceship() {
        let acceleration = Number(prompt("Quanto gostaria de acelerar?"))
        this.spaceship.speedUp()
    }

    printAndExit() {
        let finalMessage = "Nome: " + this.spaceship.name + "\n" +
            "Quantidade de tripulantes: " + this.spaceship.crewQuantity + "\n" +
            "Velocidade atual " + this.spaceship.currentVelocity + " km/s"
        alert(finalMessage)
    }
}