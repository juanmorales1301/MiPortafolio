async function enviarDatosAPI() {
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const celular = document.getElementById('num_cel').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validar que los campos obligatorios no estén vacíos
    if (!nombre || !celular || !correo) {
        alert('Por favor, completa los campos obligatorios: Nombre, Celular y Correo.');
        return;
    }

    // Preparar los datos para el envío
    const datos = {
        nombre: nombre,
        celular: celular,
        correo: correo,
        mensaje: mensaje
    };

    try {
        // Realizar la petición fetch al servidor
        const response = await fetch('http://back-portafolio-eight.vercel.app/api/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        // Manejar la respuesta del servidor
        if (response.ok) {
            const resultado = await response.json();
            alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
        } else {
            alert('Hubo un problema al enviar el formulario. Inténtalo de nuevo.');
        }
    } catch (error) {
        console.error('Error al enviar los datos:', error);
        alert('Error de conexión. Por favor, inténtalo más tarde.');
    }
}