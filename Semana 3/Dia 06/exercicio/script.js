let spaceship = {
    velocity: 0,
    speedup: function(acceleration) {
        this.velocity += acceleration
    }
}


function registerSpaceship() {
    spaceship.naveName = prompt("Insira o nome da nave:")

    spaceship.type = prompt("Insira o tipo da nave: ")

    spaceship.velocityMax = Number(prompt("Insira a velocidade maxima da nave: "))
}

function acceleration() {
    let acceleration = Number(prompt("Informe o quanto quer acelerar: "))
    spaceship.speedup(acceleration)
    if (spaceship.velocity > spaceship.velocityMax) {
        alert("VELOCIDADE ULTRAPASSADA!!\nVelocidade da Nave: " + spaceship.velocity + "km/s" +
            "\nVelocidade máxima da nave: " + spaceship.velocityMax + "km/s")
    }
}

function stoped() {
    alert("Nave: " + spaceship.naveName + "\nTipo: " + spaceship.type + "\nEstava à " + spaceship.velocity + "km/h")
    spaceship.velocity = 0
}


function showMenu() {
    let choseOption
    do {
        choseOption = prompt("Você deseja:\n1- Acelerar\n2- Parar")
        switch (choseOption) {
            case "1":
                acceleration()
                break
            case "2":
                stoped()
                break
            default:
                alert("Opção invalida!")
        }
    } while (choseOption != "2")
}

registerSpaceship()

showMenu()