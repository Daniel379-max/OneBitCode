class TransportSpaceship {
    constructor(name) {
        this.name = name;
        this.currentVelocity = 0
    }

    set velocity(newVelocity) {
        if (newVelocity > 120) {
            this.currentVelocity = 120
        } else {
            this.currentVelocity = newVelocity
        }
    }
}

let spaceship = new TransportSpaceship("Transportador")

spaceship.velocity = 130

console.log(spaceship)



//////////////////////////////////////////////////////////////////////



class RecouseProccessStation {
    constructor(name, monthlyProcessLoad) {
        this.name = name
        this.monthlyProcessLoad = monthlyProcessLoad
    }

    get weeklyProcessLoad() {
        return this.monthlyProcessLoad / 4

    }
}

let resourceProcessor = new RecouseProccessStation("Gaia", 500)

console.log(resourceProcessor.weeklyProcessLoad)

resourceProcessor.monthlyProcessLoad = 600

console.log(resourceProcessor.weeklyProcessLoad)