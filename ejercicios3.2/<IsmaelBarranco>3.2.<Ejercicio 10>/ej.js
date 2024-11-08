const showAlertButton = document.getElementById("showAlertButton");

showAlertButton.addEventListener("click", function() {
    const anchoVentana = window.innerWidth;
    const altoVentana = window.innerHeight;
    window.alert(`Ancho de la ventana: ${anchoVentana}px, Alto de la ventana: ${altoVentana}px`);
});