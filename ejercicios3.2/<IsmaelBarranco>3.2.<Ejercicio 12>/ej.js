const displayInfoDiv = document.getElementById("displayInfo");

// Obtenemos la información del navegador
const navegadorInfo = `
    Nombre del navegador: ${navigator.appName} <br>
    Versión del navegador: ${navigator.appVersion} <br>
    Plataforma: ${navigator.platform} <br>
    Idioma: ${navigator.language} <br>
    Cookies habilitadas: ${navigator.cookieEnabled} <br>
    Online: ${navigator.onLine}
`;

// Mostramos la información en el div
displayInfoDiv.innerHTML = navegadorInfo;