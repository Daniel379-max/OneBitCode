const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false],
];

hitchedSpaceships.forEach(function(currentSpaceship, index) {
    index += 1;
    console.log(currentSpaceship + '\nIndice: ' + index)
})

let crewCreaterThan9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})


let ongoingHitch = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

let upcasedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})


let message = "Espaçonaves com mais de 9 tripulantes: " + crewCreaterThan9.join(", ")
message += "\nPlataform com processo de engate: " + (ongoingHitch + 1)
message += "\nEspaçonaves destacadas: " + upcasedSpaceships.join(", ")

alert(message)