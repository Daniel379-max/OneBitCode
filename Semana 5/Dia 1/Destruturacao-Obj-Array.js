let spaceship = {
    name: "Colossus",
    crewQuantity: 50,
    isHitched: false
}


let { name: spaceshipName, crewQuantity: crewQuantity } = spaceship

// let spaceshipName = spaceship.name

// let crewQuantity = spaceship.crewQuantity

console.log(spaceshipName, crewQuantity)


let spaceships = ["Colossus", "Artemis", "Fênix"]

let [colossus, artemis, fenix, puller] = spaceships

// let colossus = spaceship[0]
// let artemis = spaceship[1]

console.log(colossus, artemis, fenix, puller)

// COLOSSUS, ARTEMIS, FENIX, UNDEFINED


function printSpaceships([colossus, artemis, fenix, puller]) {
    console.log(colossus, artemis, fenix, puller)
}

printSpaceships(spaceships)