import Spaceship from "./spaceship";
import armaments from "./armaments";
import { laserDefenses, steelDefenses } from "./defenses";

const spaceship = new Spaceship("USS Enterprise", "Jean-Luc Picard", armaments.laser, laserDefenses);

console.log(spaceship);