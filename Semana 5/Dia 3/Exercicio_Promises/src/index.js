import Spaceship from "./spaceship";
import SpaceshipEngine from "./spaceshipEngine";
import "core-js"
import "regenerator-runtime/runtime"

const shophia = new Spaceship('Shophia', 10, 5);
const amsterda = new Spaceship('Amsterdã', 14, 10);
const dwarfStar = new Spaceship('Estrela-Anã', 20, 4);

const shophiaEngine = new SpaceshipEngine(shophia);
const amsterdaEngine = new SpaceshipEngine(amsterda);
const dwarfStarEngine = new SpaceshipEngine(dwarfStar);

shophiaEngine.turnOn();
amsterdaEngine.turnOn();
dwarfStarEngine.turnOn();

console.log(Promise);