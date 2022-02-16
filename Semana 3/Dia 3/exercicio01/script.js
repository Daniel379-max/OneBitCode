let count = 0;

let chose = ""

let nave = prompt("Qual o nome da sua nave? ")

chose = prompt("Deseja entrar na dobra espacial?\n1- Sim\n2- Não")

while (chose == "1") {
    count += 1
    chose = prompt("Deseja realizar a proxima dobra espacial?\n1- Sim\n2- Não")
}

alert("Nave: " + nave + "\nQuantidade de dobras: " + count)