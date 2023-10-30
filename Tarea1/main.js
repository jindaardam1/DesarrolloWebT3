function myFunction1() {
    document.getElementById("p1").innerHTML = "Jagoba";

    document.getElementsByTagName("p").item(1).innerHTML = "Inda";

    document.getElementById("p3").innerHTML = "Localizado sin problemas";

    document.getElementById("d1").getElementsByTagName("p").item(1).innerHTML = "OK!!"
}

function myFunction2() {
    const enlaces = document.getElementsByTagName("a");

    document.getElementById("res1").innerHTML = "Número de links: " + enlaces.length

    document.getElementById("res2").innerHTML = "El penúltimo elace apunta a: " + enlaces.item(enlaces.length - 2).href

    var numeroEnlacesTycho = 0;

    for (let i = 0; i < enlaces.length; i++) {
        const element = enlaces[i];
        if (element.href === "http://es.wikipedia.org/wiki/Tycho_Brahe") {
            numeroEnlacesTycho++;
        }
    }

    document.getElementById("res3").innerHTML = "El número de anlaces que apuntan a http://es.wikipedia.org/wiki/Tycho_Brahe es: " + numeroEnlacesTycho;

    const enlacesTercerParrafo = document.getElementsByName("p3").item(0).getElementsByTagName("a");

    document.getElementById("res4").innerHTML = "Número de enlaces del tercer párrado: " + enlacesTercerParrafo.length;
}