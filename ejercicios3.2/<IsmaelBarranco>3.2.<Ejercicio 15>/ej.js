const mouseInfo = document.getElementById("mouseInfo");

mouseInfo.addEventListener("mousemove", function(event) {
    // Obtiene las coordenadas del mouse
    const x = event.clientX;
    const y = event.clientY;

    // Actualiza el contenido del párrafo con las coordenadas
    mouseInfo.textContent = `Coordenadas del mouse: X = ${x}, Y = ${y}`;
});
