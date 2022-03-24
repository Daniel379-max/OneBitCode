let spaceship = {
    name: 'Fenix',
    crewQuantity: 8,
    type: 'Batalha'
}

console.log(spaceship.type) //Batalha

console.log(spaceship["name"]) //Fenix

spaceship.isHitched = false

spaceship["shieldLevel"] = 100