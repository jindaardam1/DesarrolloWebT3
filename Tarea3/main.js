function mostrarResultadosArriba() {
    dejarDeMostrarAbajo();

    const div = document.getElementById("d1");

    div.style.display = "block";

    const enlaces = document.getElementsByTagName("a");

    document.getElementById("resultadoArriba").innerHTML = "Número de enlaces: " + enlaces.length + "<br/>";

    document.getElementById("resultadoArriba").innerHTML += "El penúltimo enlace apunta a: " + enlaces.item(enlaces.length - 2) + "<br/>";

    let numeroApuntan = 0;

    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces.item(i).href === "http://es.wikipedia.org/wiki/Tycho_Brahe") {
            numeroApuntan++;
        }
    }

    document.getElementById("resultadoArriba").innerHTML += numeroApuntan + " enlaces apuntan a http://es.wikipedia.org/wiki/Tycho_Brahe" + "<br/>";

    const enlacesTercerParrafo = document.getElementsByName("p3").item(0).getElementsByTagName("a");

    document.getElementById("resultadoArriba").innerHTML += "Número de enlaces del tercer párrafo: " + enlacesTercerParrafo.length + "<br/>";
}

function dejarDeMostrarArriba() {
    const div = document.getElementById("d1");

    div.style.display = "none";
}


function mostrarResultadosAbajo() {
    dejarDeMostrarArriba();

    const div = document.getElementById("d2");

    div.style.display = "block";

    const enlaces = document.getElementsByTagName("a");

    document.getElementById("resultadoAbajo").innerHTML = "Número de enlaces: " + enlaces.length + "<br/>";

    document.getElementById("resultadoAbajo").innerHTML += "El penúltimo enlace apunta a: " + enlaces.item(enlaces.length - 2) + "<br/>";

    let numeroApuntan = 0;

    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces.item(i).href === "http://es.wikipedia.org/wiki/Tycho_Brahe") {
            numeroApuntan++;
        }
    }

    document.getElementById("resultadoAbajo").innerHTML += numeroApuntan + " enlaces apuntan a http://es.wikipedia.org/wiki/Tycho_Brahe" + "<br/>";

    const enlacesTercerParrafo = document.getElementsByName("p3").item(0).getElementsByTagName("a");

    document.getElementById("resultadoAbajo").innerHTML += "Número de enlaces del tercer párrafo: " + enlacesTercerParrafo.length + "<br/>";

}

function dejarDeMostrarAbajo() {
    const div = document.getElementById("d2");

    div.style.display = "none";
}

function selectMostrarResultadosConBoton() {
    const select = document.getElementById("selectOpcion");

    if (select.value === "opcionArriba") {
        mostrarResultadosArriba();
    } else {
        mostrarResultadosAbajo();
    }
}

function dejarDeMostrarArribaYAbajo() {
    dejarDeMostrarArriba();
    dejarDeMostrarAbajo();
}