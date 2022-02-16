let distanceYL = prompt("Qual a distância em anos luz?")

let option = prompt("Escolha uma das opções a seguir para a converção:\n1- Parsec\n2- Unidade Astronômica\n3- Quilômetros")

let unity
let convert

switch (option) {
    case "1":
        let pc = distanceYL * 0.306601
        alert("Distância em anos luz: " + distanceYL + "\nDistância em Parsec: " + pc);
        break;
    case "2":
        let au = distanceYL * 63241.1
        alert("Distância em anos luz: " + distanceYL + "\nDistância em Unicade Astronômica: " + au);
        break;
    case "3":
        let km = distanceYL * (9.5 * Math.pow(10, 12))
        alert("Distância em anos luz: " + distanceYL + "\nDistância em Quilômetros: " + km);
        break;
    default:
        alert("Distância em Anos-luz: " + distanceYL + "\nUnidade não identificada: Conversão fora do escopo")
        break;
}