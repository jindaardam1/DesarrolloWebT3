const apiUrl = 'https://api.github.com/users/jagobainda';
fetch(apiUrl)
    .then(response => response.json())
    .then(usuario => {
        const tablaBody = document.getElementById('tabla').getElementsByTagName('tbody')[0];

        const fila = tablaBody.insertRow();
        const celdaId = fila.insertCell(0);
        const celdaNombre = fila.insertCell(1);
        const celdaUrlHtml = fila.insertCell(2);
        const celdaSeguidores = fila.insertCell(3);
        const celdaSiguiendo = fila.insertCell(4);

        celdaId.textContent = usuario.id;
        celdaNombre.textContent = usuario.name;
        celdaUrlHtml.innerHTML = `<a href="${usuario.html_url}" target="_blank">${usuario.html_url}</a>`;
        celdaSeguidores.textContent = usuario.followers;
        celdaSiguiendo.textContent = usuario.following;
    })
    .catch(error => console.error('Error al obtener datos:', error));