function show() {
    let element = document.getElementById("name")
        // ira pegar o atributo name
    let element2 = document.getElementsByName("phone")
        // irá pegar todos que tem atributo "phone"
    let element3 = document.querySelectorAll("div#phones input[name = 'phone']")
    let element4 = document.getElementsByTagName("input")

    console.log(element.value)
    console.log(element2)
    console.log(element2[0].value)
    console.log(element3)
    console.log(element4)
}