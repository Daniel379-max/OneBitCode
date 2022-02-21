let nameSpaceship = prompt('Insira o nome da nave: ')

let velocity = 0
let acceleration = 5;

let choseOption

function showMenu() {
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt('Escolha uma opção de comando:\n1- Acelerar a nave em 5km/s\n2- Desacelerar a nave em 5km/s\n3- Imprimir dados de bordo\n4- Sair do programa')
    }

    return option
}

do {
    choseOption = showMenu()
    switch (choseOption) {
        case "1":
            velocity = speedup(velocity, acceleration)
            break;
        case "2":
            velocity = speedDown(velocity, acceleration)
            break;
        case "3":
            showData(nameSpaceship, velocity)
            break;
        default:

            alert('Programa encerrado!!!!')
    }
} while (choseOption != "4");



function speedDown(velocity, acceleration) {
    let newVelocity = velocity - acceleration;
    if (newVelocity < 0) {
        newVelocity = 0;
    }
    return newVelocity
}

function speedup(velocity, acceleration) {
    let newVelocity = velocity + acceleration;
    return newVelocity
}

function showData(name, velocity) {
    alert('Nome da nave: ' + name + '\nVelocidade atual: ' + velocity + "km/s")
}