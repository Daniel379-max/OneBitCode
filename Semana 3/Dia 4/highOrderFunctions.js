function doubleSpeed(velocity, printer) {
    console.log("Entrei em doubleSpeed")
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

// let printerVelocity = velocity => {
//     console.log("Nova velocidade: " + velocity) + "km/s"
// }

// let newVelocity = doubleSpeed(60, printerVelocity)
// console.log(newVelocity)


let anotherVelocity = doubleSpeed(50, () => {
    console.log("Outra velocidade: " + velocity)
})