// Evento clic
document.querySelector('p').addEventListener('click', function () {
    this.classList.toggle('highlighted');
});

// Evento change
document.getElementById('color').addEventListener('change', function () {
    alert('Color seleccionado: ' + this.value);
});

// Eventos mouseover y mouseout
var hoverDiv = document.getElementById('hoverDiv');
hoverDiv.addEventListener('mouseover', function () {
    this.innerHTML = '¡Mouse encima!';
});

hoverDiv.addEventListener('mouseout', function () {
    this.innerHTML = 'Pasa el mouse por encima de este div.';
});

// Eventos mousedown y mouseup
var mouseButton = document.getElementById('mouseButton');
mouseButton.addEventListener('mousedown', function () {
    this.innerHTML = 'Suelta el botón del mouse ahora';
});

mouseButton.addEventListener('mouseup', function () {
    this.innerHTML = 'Presiona y suelta el botón del mouse aquí.';
});

// Evento focus
var inputField = document.getElementById('inputField');
inputField.addEventListener('focus', function () {
    this.value = '¡Enfocado!';
});