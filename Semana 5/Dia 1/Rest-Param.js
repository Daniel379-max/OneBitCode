function greetCrew(message, names) {
    names.forEach(name => console.log(`${message}, ${name}`))
}

greetCrew("Seja bem vindo", ["Daniel", "Caio", "Maria"])

////////////////////////////////////////////////////////////////////////////////////////

function greetCrews(message, ...names) {
    names.forEach(name => console.log(`${message}, ${name}`))
}

greetCrew("Seja bem vindo", "Daniel", "Caio", "Maria")