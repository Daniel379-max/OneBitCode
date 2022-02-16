let departure = prompt('Digite a data de partida (formata DD/MM/YYYY)')

let departureDate = moment(departure, "DD/MM/YYYY")

let today = moment()

let dif = today - departureDate

let choseOption = prompt('Como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias')

if (choseOption == 1) {
    let secondsOfDepature = Math.round(dif / 1000)
    alert('Tempo de vôo: ' + secondsOfDepature + ' seconds')
} else if (choseOption == 2) {
    let minutesOfDepature = Math.round(dif / 1000 / 60)
    alert('Tempo de vôo: ' + minutesOfDepature + ' minutes')
} else if (choseOption == 3) {
    let hoursOfDepature = Math.round(dif / 1000 / 60 / 60)
    alert('Tempo de vôo: ' + hoursOfDepature + ' hours')
} else if (choseOption == 4) {
    let daysOfDepature = Math.round(dif / 1000 / 60 / 60 / 25)
    alert('Tempo de vôo: ' + daysOfDepature + ' days')
} else {
    alert("Opção invalida")
}