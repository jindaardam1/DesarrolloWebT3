function sumar(a, b) {
    document.getElementById("texto3").innerHTML = "la suma es: " + (a + b);

}

const caja = document.getElementById("caja");
const texto1 = document.getElementById("texto1");

function manejadorMousemove() {
    var numeroAleatorio = Math.random();
    texto1.textContent = numeroAleatorio.toFixed(3);
}

caja.addEventListener("mousemove", manejadorMousemove);

const boton = document.getElementById("b1");

boton.addEventListener("mouseenter", function () {
    document.getElementById("texto2").innerHTML = "El ratón está encima del botón";
});

boton.addEventListener("mouseleave", function () {
    document.getElementById("texto2").innerHTML = ".";
});

boton.addEventListener("click", function () {
    caja.removeEventListener("mousemove", manejadorMousemove);
    document.getElementById("texto2").innerHTML = "STOP";
});

const boton2 = document.getElementById("b2");

function manejadorBoton2click() {
    let n1 = prompt("Introduce el primer número");
    let n2 = prompt("Introduce el segudno número");

    document.getElementById("texto3").innerHTML = parseInt(n1) + parseInt(n2);
}

boton2.addEventListener("click", manejadorBoton2click);