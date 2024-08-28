function cargarContenido(idDiv, url) { // Función para cargar el HTML externo 
    fetch(url).then(response => {
        if (!response.ok) throw new Error('Error al cargar el contenido');
        return response.text();
    }).then(html => {
        document.getElementById(idDiv).innerHTML = html;
    }).catch(error => console.error('Error:', error));
}