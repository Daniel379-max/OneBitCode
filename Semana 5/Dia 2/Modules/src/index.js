const Planet = require('./planet');
const planetOperations = require('./planet_operations');


let planets = [
    new Planet('Terra', 1),
    new Planet('Mercurio', 0.39),
    new Planet('Saturno', 9, 53),
    new Planet('Marte', 1.52),
    new Planet('Venus', 0, 72),
    new Planet('Jupiter', 5.2),
    new Planet('Urano', 19.1),
    new Planet('Neturno', 30)
]

planets.forEach(planet => {
    distanceFromSun = planetOperations.convertAUtoKM(planet.autoSum).toFixed(2);
    console.log(`${planet.name} está a ${distanceFromSun} km de distancia del Sol e a ${planet.autoSum} AU`);
})