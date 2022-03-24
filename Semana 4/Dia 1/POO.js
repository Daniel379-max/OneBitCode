class Spaceship {

}

let mySpaceship = new Spaceship();

console.log(mySpaceship)


///////////////////////////////////////////////////////////////////////////


class SpacialStation {
    constructor(name, plataformQuantity = 5) {
        this.name = name;
        this.plataformQuantity = plataformQuantity;
    }
}

let observatory = new SpacialStation("Observatório", 50)


////////////////////////////////////////////////////////////////////////////////////

class Spaceship2 {
    constructor(name) {
        this.name = name;
        this.velocity = 0
    }

    speedUP(acceleration) {
        this.velocity += acceleration
    }
}


let artemis = new Spaceship2("Artemis")

artemis.speedUP(10)
artemis.speedUP(42)

console.log(artemis)