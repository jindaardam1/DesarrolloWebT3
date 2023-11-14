function boom(){
    document.write("<img src='boom.gif' height='100%' width='100%'>");
}

var alumnos = [];

function addAlumno() {
    var tablaAlumnos = document.getElementById('alumnos');
    tablaAlumnos.classList.remove('oculto');
    
    var nombre = prompt('Ingrese el nombre del alumno:');
    var nota = prompt('Ingrese la nota de ' + nombre + ":");

    if (nombre && nota) {
        var tableBody = document.querySelector('#alumnos tbody');
        var newRow = document.createElement('tr');

        var numeroCell = document.createElement('td');
        numeroCell.textContent = alumnos.length + 1;
        newRow.appendChild(numeroCell);

        var nombreCell = document.createElement('td');
        nombreCell.textContent = nombre;
        newRow.appendChild(nombreCell);

        var notaCell = document.createElement('td');
        notaCell.textContent = nota;
        newRow.appendChild(notaCell);

        tableBody.appendChild(newRow);

        // Guardar el alumno en la lista de alumnos
        alumnos.push({ nombre: nombre, nota: nota });
    }
}

function removeAlumno() {
    if (alumnos.length > 0) {
        var tableBody = document.querySelector('#alumnos tbody');
        alumnos.pop();
        tableBody.removeChild(tableBody.lastChild);
    }
}


function renumerarAlumnos() {
    var tableRows = document.querySelectorAll('#alumnos tbody tr');
    for (var i = 0; i < tableRows.length; i++) {
        tableRows[i].querySelector('td:first-child').textContent = i + 1;
    }
}
