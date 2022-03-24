class Captain {
    constructor(name, age, flyhours) {
        this.name = name;
        this.age = age;
        this.flyhours = flyhours;
    }
}

class Spaceship {
    constructor(name, crewQuantity, captainName, captainAge, captainFlyhours) {
        this.name = name;
        this.crewQuantity = crewQuantity;
        this.captain = new Captain(captainName, captainAge, captainFlyhours);
    }
}

let spaceship = new Spaceship("ARTEMIS", 13, "FIFWW", 32, 530)