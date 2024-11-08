const paragraph = document.getElementById("paragraph");

    // Obtiene la URL actual de la página
    const urlActual = window.location.href;

    // Actualiza el contenido del párrafo con la URL
    paragraph.textContent = `La URL actual es: ${urlActual}`;
;