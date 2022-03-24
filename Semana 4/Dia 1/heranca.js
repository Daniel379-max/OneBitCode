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

class BattleSpaceship extends Spaceship {
    stoped() {
        this.currentVelocity = 0
        alert("Recolhendo armas e parando")
    }
}


class DiscoverySpaceship extends Spaceship {
    stoped() {
        this.currentVelocity = 0
        alert("Recolhendo equipamentos de amostras e parando")
    }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200)

let colossus = new BattleSpaceship("Colossus", 40, 100)



darwin.speedUp(300)

colossus.speedUp(60)