let spaceship = {
    name: "Supernova",
    type: "Batalha",
    crew: ["Daniel", "Ana", "Joao"]
}

spaceship.crew.push("Caio")


let spaceship2 = [
    { name: "Colossus", crewQuantity: 10 },
    { name: "Elemental", crewQuantity: 4 },
    { name: "Helmet", crewQuantity: 13 }
]

console.log(spaceship[1].name) //elemental


spaceship2.forEach(spaceship => {
    alert(spaceship.name + ' tem ' + spaceship.crewQuantity + ' tripulantes.')
})

///////////////////////////////////////////////////////////////////////////////////////////////////


let spaceship3 = {
    name: 'Demeter',
    type: 'Extração',
    masCrew: 21,
    turnOn: function() {
        alert("Preparando a nave")
        alert("Ligando computador")
    }
}

spaceship3.velocity = 0
spaceship3.speedup = function(acceleration) {
    this.velocity += acceleration
}

console.log(spaceship3)

spaceship3.speedup(12)

console.log(spaceship3)