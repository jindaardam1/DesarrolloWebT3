function mostrarResultados() {
    const enlaces = document.getElementsByTagName("a");

    document.getElementById("resultado").innerHTML = "Número de enlaces: " + enlaces.length + "<br/>";

    document.getElementById("resultado").innerHTML += "El penúltimo enlace apunta a: " + enlaces.item(enlaces.length - 2) + "<br/>";

    let numeroApuntan = 0;

    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces.item(i).href === "http://es.wikipedia.org/wiki/Tycho_Brahe") {
            numeroApuntan++;
        }
    }

    document.getElementById("resultado").innerHTML += numeroApuntan + " enlaces apuntan a http://es.wikipedia.org/wiki/Tycho_Brahe" + "<br/>";

    const enlacesTercerParrafo = document.getElementsByName("p3").item(0).getElementsByTagName("a");

    document.getElementById("resultado").innerHTML += "Número de enlaces del tercer párrafo: " + enlacesTercerParrafo.length + "<br/>";
}