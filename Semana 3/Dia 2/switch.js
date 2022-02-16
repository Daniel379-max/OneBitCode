let velocity = 80

switch (velocity * 2) {
    case 100:
        console.log("Sua velocidade é 100 km/s")
        break
    case 160:
        console.log("Sua velocidade 160 km/s")
        break
    default:
        console.log("Sua velocidade não foi identificada")
}



let velo = 80

switch (velo) {
    case 80:
    case 90:
    case 100:
        console.log("Sua velocidade é  menor igual a 100 km/s")
        break
    case 110:
        console.log("Sua velocidade é maior que 100 km/s")
        break
    default:
        console.log("Sua velocidade não foi identificada")
}