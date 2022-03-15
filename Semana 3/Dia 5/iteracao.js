let hitchedSpaceships = ["Demeter", "Darwin", "Supernova", "Fenix", "Puller"]


let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship, index) {
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})


hitchedSpaceships.forEach(function(currentSpaceship, index) {
    console.log("Nave" + currentSpaceship + '\nIndice: ' + index)
})


let with7Chars = hitchedSpaceships.fillter(element => { return element.length > +7 })