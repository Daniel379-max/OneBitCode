export default class Spaceship {
    constructor(name, capacity, currentCapacity, shield) {
        this.name = name;
        this.capacity = capacity;
        this.currentCapacity = currentCapacity;
        this.shield = shield;

    }
    currentPercentage() {
        return this.currentCapacity * 100 / this.capacity;
    }
}