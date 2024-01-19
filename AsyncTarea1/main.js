fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        const tablaBody = document.getElementById('tabla').getElementsByTagName('tbody')[0];

        json.forEach(usuario => {
            const fila = tablaBody.insertRow();
            const celdaId = fila.insertCell(0);
            const celdaNombre = fila.insertCell(1);
            const celdaEmail = fila.insertCell(2);
            const celdaUsername = fila.insertCell(3);

            celdaId.textContent = usuario.id;
            celdaNombre.textContent = usuario.name;
            celdaEmail.textContent = usuario.email;
            celdaUsername.textContent = usuario.username;
        });
    })
    .catch(error => console.error('Error al obtener datos:', error));