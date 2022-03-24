class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentlyVelocity = 0
    }

    speedUp(acceleration) {
        this.currentlyVelocity += acceleration
        if (this.currentVelocity > this.maxRecommendedVelocity) {
            alert("VELOCIDADE MAXIMA ULTRAPASSADA!!\n Diminua ou provocará danos")
        }
    }
}

class TransportSpaceship extends Spaceship {
    constructor(name, maxCrew, macRecommendedVelocity, maxLoadWeight) {
        super(name, maxCrew, maxRecommendedVelocity)
        this.maxLoadWeight = maxLoadWeight
    }

    speedUp(acceleration) {
        acceleration /= 2
        alert('Incrementando velocidade em' + acceleration + "km/s")
        super.speedUp(acceleration)
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400)