let komodoShip = {
    name: 'Komodo',
    velocity: 80,
    accelerartion: 10
}

const velocityAfter2Seconds = (velocity, accelerartion) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {

            if (accelerartion > 0) {
                velocity += accelerartion * 2
                console.log(`${komodoShip.name} velocity after 2 seconds: ${velocity}`)
                resolve(velocity)
            } else {
                console.log(`Aceleração inválida`)
                reject(`Aceleração inválida`)
            }
        }, 2000)
    })
}

velocityAfter2Seconds(komodoShip.velocity, komodoShip.accelerartion).then(velocity => {
    komodoShip.velocity = velocity
    console.log("Depois de acelerar:\n", komodoShip)
}).catch(message => {
    console.log(`Komodo: ${message}`)
})

console.log('Execução da Promise')
console.log(komodoShip)