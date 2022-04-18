function saveHouse() {
    let area = document.querySelector("input[name='home-area']").value
    let number = document.querySelector("input[name='home-number']").value
    let neighborhood = document.querySelector("input[name='home-neighborhood']").value
    let city = document.querySelector("input[name='home-city']").value

    let newList = document.createElement("li")
    newList.innerText = area + "m², numero " + number + "(" + neighborhood + " - " + city + ")"

    let removerButton = document.createElement("button")
    removerButton.type = "button"
    removerButton.innerText = "Remove"
    removerButton.setAttribute("onclick", "removeHouse(this)")


    newList.appendChild(removerButton)

    document.getElementById("house-list").appendChild(newList)
}

function removeHouse(button) {
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)
}