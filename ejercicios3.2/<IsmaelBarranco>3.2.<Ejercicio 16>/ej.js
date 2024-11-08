const openWindowButton = document.getElementById("moveWindowButton");

openWindowButton.addEventListener("click", function() {
    // Abre una nueva ventana con una página externa( la pagina es de memes)
    const nuevaVentana = window.open("https://acortar.link/SgfiB", "nuevaVentana", "width=600,height=400");

    // Cierra la ventana después de 3 segundos 
    setTimeout(function() {
        nuevaVentana.close();
    }, 3000);
});