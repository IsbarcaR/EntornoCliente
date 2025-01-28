const API_KEY = "7b4c814d3b6baf9b1f84c0a748a74d04"; // Reemplaza con tu API key de OpenWeatherMap
const API_URL = "https://api.openweathermap.org/data/2.5/weather";


function loadSavedLocations() {
    return JSON.parse(localStorage.getItem("savedLocations")) || [];
}


function saveLocations(locations) {
    localStorage.setItem("savedLocations", JSON.stringify(locations));
}


function displaySavedLocations() {
    const locations = loadSavedLocations();
    const locationList = document.getElementById("locationList");
    locationList.innerHTML = locations
        .map((location, index) => `
            <li class="location-item">
                <span>${location}</span>
                <button onclick="deleteLocation(${index})">Eliminar</button>
            </li>
        `)
        .join("");
}


document.getElementById("locationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const city = document.getElementById("cityInput").value;

    fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=es`)
        .then(response => response.json())
        .then(data => {
            const weatherResult = document.getElementById("weatherResult");
            weatherResult.innerHTML = `
                <h2>Clima en ${data.name}</h2>
                <p>Temperatura: ${data.main.temp}°C</p>
                <p>Descripción: ${data.weather[0].description}</p>
                <p>Humedad: ${data.main.humidity}%</p>
                <button onclick="saveLocation('${data.name}')">Guardar Ubicación</button>
            `;
        });
});

function saveLocation(city) {
    const locations = loadSavedLocations();
    if (!locations.includes(city)) {
        locations.push(city);
        saveLocations(locations);
        displaySavedLocations();
    }
}

// Eliminar ubicación
function deleteLocation(index) {
    const locations = loadSavedLocations();
    locations.splice(index, 1);
    saveLocations(locations);
    displaySavedLocations();
}

// Inicializar
displaySavedLocations();