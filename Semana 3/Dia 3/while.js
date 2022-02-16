let velocity = 50
let acceleration = 5

while (velocity <= 100) {
    console.log("Acelerando: Estamos a " + velocity + " km/s")
    velocity += acceleration
}



let constelation = "Andromeda"
let pos = 0
let constellations = constelation.length


while (pos < constellations) {
    if (constellations[pos] == "a" || constellations[pos] == "A") {
        console.log(pos)
    }
    pos += 1
}