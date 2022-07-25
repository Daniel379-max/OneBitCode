export default class {
    constructor(spaceship) {
        this.spaceship = spaceship;
    }


    async turnOn() {
        try {
            let currentChargeCheck = this.checkCurrentCharge();
            let shieldChecking = this.testShield();
            let results = await Promise.all([currentChargeCheck, shieldChecking])
            this.spaceship.shield = await this.shieldNormalizer(results[1]);
            console.log(`${this.spaceship.name} Partida autorizada: Escudo ${this.spaceship.shield}ativado - Carga ${this.spaceship.currentCharge}GJ`);
        } catch (error) {
            console.log(`(${this.spaceship.name}) Partida não autorizada: ${error}`)
        }
    }

    async checkCurrentCharge() {
        let currentCharge = this.spaceship.currentPercentage();
        if (currentCharge < 30) {
            return Promise.reject(`Carga em  apenas ${currentCharge}%GJ`);
        }
        return currentCharge;
    }

    async testShield() {
        let doubleShield = this.spaceship.shield * 2;
        if (this.spaceship.shield < 100) {
            return Promise.reject("Escudo em sobrecarga");
        }
        return doubleShield;
    }
    async shieldNormalizer(shield) {
        let shieldNormalizerShield = shield * 0.7
        if (shieldNormalizerShield > 120) {
            return Promise.resolve("Escudo em sobrecarga");
        } else {
            return shieldNormalizerShield;
        }

    }

}