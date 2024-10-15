// Inicializar una lista para almacenar las canciones y artistas
let canciones = [];

// Función para mostrar el menú y manejar las opciones
function mostrarMenu() {
    let opcion;
    do {
        // Mostrar el menú
        opcion = prompt(`Elige una opción:
        1. AGREGAR CANCIÓN
        2. BUSCAR CANCIONES
        3. LISTAR ARTISTAS
        4. SALIR`);

        // Ejecutar la acción basada en la opción elegida
        switch (opcion) {
            case '1':
                agregarCancion();
                break;
            case '2':
                buscarCanciones();
                break;
            case '3':
                listarArtistas();
                break;
            case '4':
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida. Por favor, elige una opción correcta.");
        }
    } while (opcion !== '4');
}

// Función para agregar una canción
function agregarCancion() {
    let input = prompt("Ingresa el nombre de la canción y el artista separados por coma (por ejemplo: Africa, Toto):");
    if (input) {
        let [nombreCancion, nombreArtista] = input.split(',').map(item => item.trim());
        if (nombreCancion && nombreArtista) {
            canciones.push({ cancion: nombreCancion, artista: nombreArtista });
            console.log(`Canción "${nombreCancion}" de ${nombreArtista} agregada exitosamente.`);
        } else {
            console.log("Formato inválido. Asegúrate de ingresar el nombre de la canción y el artista separados por coma.");
        }
    } else {
        console.log("No se ha ingresado ninguna canción.");
    }
}

// Función para buscar canciones por artista
function buscarCanciones() {
    let nombreArtista = prompt("Ingresa el nombre del artista para buscar sus canciones:");
    if (nombreArtista) {
        let cancionesArtista = canciones.filter(cancion => cancion.artista.toLowerCase() === nombreArtista.toLowerCase());
        if (cancionesArtista.length > 0) {
            console.log(`Canciones de ${nombreArtista}:`);
            cancionesArtista.forEach(cancion => console.log(cancion.cancion));
        } else {
            console.log(`No se encontraron canciones de ${nombreArtista}.`);
        }
    } else {
        console.log("No se ha ingresado ningún nombre de artista.");
    }
}

// Función para listar todos los artistas
function listarArtistas() {
    let artistas = [...new Set(canciones.map(cancion => cancion.artista))]; // Eliminar duplicados
    if (artistas.length > 0) {
        console.log("Artistas:");
        artistas.forEach(artista => console.log(artista));
    } else {
        console.log("No hay artistas en la lista.");
    }
}

// Ejecutar el programa mostrando el menú
mostrarMenu();
