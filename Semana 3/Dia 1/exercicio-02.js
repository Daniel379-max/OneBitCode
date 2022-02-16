const name_old = prompt("Informe o nome da pessoa mais velha: ")
const age_old = prompt("Informe a idade da pessoa mais velha: ")

const name_young = prompt("Informe o nome da pessoa mais nova: ")
const age_young = prompt("Informe a idade da pessoa mais nova: ")

let dif = age_old - age_young;

alert(name_old + " tem " + age_old + " anos de idade.")
alert(name_young + " tem " + age_young + " anos de idade.")
alert("A diferença de idade é de " + dif + " anos")