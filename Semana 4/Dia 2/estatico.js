class ResourceProcessorStation {
    constructor(name, monthlyProcessing) {
        this.name = name;
        this.monthlyProcessing = monthlyProcessing;
    }
    static calculateProcessInHours(monthlyProcessing, hours) {
        return monthlyProcessing / 720 * hours;
    }
}

let totalProcessing = ResourceProcessorStation.calculateProcessInHours(500, 6)

console.log(totalProcessing)


let processor = new ResourceProcessorStation('Gaia', 2000)

let totalProcessed = ResourceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 100)

console.log(totalProcessed)



////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class Spaceship {
    static get decelerationRate() {
        return 0.15
    }

    construtor(name) {
        this.name = name
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += (acceleration * (1 - Spaceship.decelerationRate))
    }
}


let spaceship = new Spaceship("Apollo")

spaceship.speedUp(100)

console.log(spaceship)