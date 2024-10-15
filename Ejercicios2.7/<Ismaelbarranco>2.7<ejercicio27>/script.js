// Lista de palabras para elegir
const palabras = ["electricidad", "computadora", "javascript", "programacion", "desarrollo", "tecnologia"];

// Seleccionar una palabra aleatoria de la lista
const palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];

// Crear una versión oculta de la palabra con asteriscos
let palabraMostrada = "*".repeat(palabraSecreta.length);

// Variables de control
let intentosRestantes = 6;
let letrasIncorrectas = [];

// Función para mostrar el estado actual del juego
function mostrarEstado() {
    console.log(`La palabra es: ${palabraMostrada}`);
    console.log(`Te quedan ${intentosRestantes} equivocaciones posibles.`);
    console.log(`Letras incorrectas: ${letrasIncorrectas.join(", ")}`);
}

// Función para actualizar la palabra mostrada si la letra es correcta
function actualizarPalabraMostrada(letra) {
    let nuevaPalabraMostrada = "";
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
            nuevaPalabraMostrada += letra;
        } else {
            nuevaPalabraMostrada += palabraMostrada[i];
        }
    }
    palabraMostrada = nuevaPalabraMostrada;
}

// Función principal del juego
function jugar() {
    while (intentosRestantes > 0 && palabraMostrada !== palabraSecreta) {
        mostrarEstado();
        
        // Pedir al jugador que ingrese una letra o intente adivinar la palabra
        let entrada = prompt("Ingresa una letra o intenta adivinar la palabra:");

        // Si el jugador intenta adivinar la palabra completa
        if (entrada.length > 1) {
            if (entrada.toLowerCase() === palabraSecreta) {
                console.log(`¡Felicitaciones, has adivinado la palabra! La palabra era "${palabraSecreta}".`);
                return;
            } else {
                console.log("¡Lo siento, esa no es la palabra correcta!");
                break;
            }
        } else {
            // El jugador ingresa una letra
            let letra = entrada.toLowerCase();
            
            // Verificar si la letra ya fue ingresada incorrectamente
            if (letrasIncorrectas.includes(letra) || palabraMostrada.includes(letra)) {
                console.log("Ya has intentado esa letra, prueba otra.");
            } else if (palabraSecreta.includes(letra)) {
                actualizarPalabraMostrada(letra);
                console.log(`¡Bien hecho! La letra "${letra}" está en la palabra.`);
            } else {
                letrasIncorrectas.push(letra);
                intentosRestantes--;
                console.log(`La letra "${letra}" no está en la palabra.`);
            }
        }
    }

    // Resultado final del juego
    if (palabraMostrada === palabraSecreta) {
        console.log(`¡Felicidades, has adivinado la palabra: "${palabraSecreta}"!`);
    } else {
        console.log(`¡Lo siento, has perdido! La palabra era "${palabraSecreta}".`);
    }
}

// Iniciar el juego
jugar();
