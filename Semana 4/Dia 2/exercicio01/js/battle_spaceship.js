class BattleSpaceship extends Spaceship {
    constructor(name, crewQuantity, weaponsQuantity) {
        super(name, crewQuantity)
        this.weaponQuantity = weaponsQuantity
    }
}