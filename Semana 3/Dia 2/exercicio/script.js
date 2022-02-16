const name = prompt("Informe o nome do piloto:");

let velocity = 0;

let aceleration = prompt("A que velocidade gostaria de acelerar?")

let confirmar = confirm("Confirme que a velocidade está em " + aceleration);






if (confirmar == true) {
    if (aceleration < 0) {
        alert("Nave está parada. Considere partir e aumentar a velocidade")
    } else if (velocity < 40) {
        alert("Estamos devagar")
    } else if (velocity >= 40 && velocity < 80) {
        alert("Podemos manter a velocidade")
    } else if (velocity >= 80 && velocity < 100) {
        alert("Velocidade alta. Diminuir")
    } else {
        alert("Velocidade perigosa. Controle automatico forçado")
    }

    alert("O Piloto " + name + " está a " + aceleration + " km/h")
} else {
    alert("Velocidade não confirmada")
}