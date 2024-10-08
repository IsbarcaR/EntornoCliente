let historial = [];
let modoActual = 'SUPERVIVENCIA';
let colores = ['rojo', 'azul', 'verde', 'amarillo'];
let partidasJugadas = 0;

// Función para generar un color aleatorio
function colorAleatorio() {
    return colores[Math.floor(Math.random() * colores.length)];
}

// Función para jugar el juego
function jugarSimon() {
    let secuencia = [];
    let rondasSuperadas = 0;
    let maxRondas = 0;
    let resultado = '';

    if (modoActual === 'CLASICO') {
        maxRondas = parseInt(prompt('¿Cuántas rondas te gustaría jugar?'));

        while (isNaN(maxRondas) || maxRondas <= 0) {
            alert('Por favor, ingresa un número válido de rondas.');
            maxRondas = parseInt(prompt('¿Cuántas rondas te gustaría jugar?'));
        }
    }

    // Ciclo principal del juego
    while (modoActual === 'SUPERVIVENCIA' || rondasSuperadas < maxRondas) {
        secuencia.push(colorAleatorio());
        alert('Secuencia actual: ' + secuencia.join(', '));

        for (let i = 0; i < secuencia.length; i++) {
            let respuesta = prompt('Ingresa el color número ' + (i + 1) + ' de la secuencia:').toLowerCase();

            if (respuesta !== secuencia[i]) {
                alert('¡Te equivocaste! La secuencia era: ' + secuencia.join(', '));
                alert('Rondas superadas: ' + rondasSuperadas);
                resultado = 'Derrota en ronda ' + (rondasSuperadas + 1);
                guardarHistorial(resultado);
                return;
            }
        }

        rondasSuperadas++;
        alert('¡Correcto! Has superado la ronda ' + rondasSuperadas);

        if (modoActual === 'CLASICO' && rondasSuperadas === maxRondas) {
            alert('¡Felicidades! Has ganado después de ' + maxRondas + ' rondas.');
            resultado = 'Partida ganada';
            guardarHistorial(resultado);
            return;
        }
    }

    if (modoActual === 'SUPERVIVENCIA') {
        resultado = rondasSuperadas + ' rondas ganadas';
        guardarHistorial(resultado);
    }
}

// Función para guardar el resultado en el historial
function guardarHistorial(resultado) {
    let tipoJuego = (modoActual === 'SUPERVIVENCIA') ? 'MODO SUPERVIVENCIA' : 'MODO CLASICO';
    let registro = `[${partidasJugadas + 1}] ${tipoJuego}: ${colores.length} colores. ${resultado}.`;
    historial.push(registro);
    partidasJugadas++;
}

// Función para cambiar el modo de juego
function cambiarModo() {
    let nuevoModo = prompt('Elige un modo de juego: CLASICO o SUPERVIVENCIA').toUpperCase();
    if (nuevoModo === 'CLASICO' || nuevoModo === 'SUPERVIVENCIA') {
        modoActual = nuevoModo;
        alert('Modo de juego cambiado a ' + modoActual);
    } else {
        alert('Modo no válido.');
    }
}

// Función para cambiar los colores del juego
function cambiarColores() {
    let nuevosColores = prompt('Ingresa los colores separados por comas (mínimo 4):').split(',').map(color => color.trim().toLowerCase());
    if (nuevosColores.length >= 4) {
        colores = nuevosColores;
        alert('Colores actualizados: ' + colores.join(', '));
    } else {
        alert('Debes ingresar al menos 4 colores.');
    }
}

// Función para mostrar el historial de partidas
function verHistorial() {
    if (historial.length === 0) {
        alert('No hay partidas jugadas aún.');
    } else {
        alert(historial.join('\n'));
    }
}

// Menú principal
function menu() {
    let opcion;
    do {
        opcion = prompt(`
Modo actual: ${modoActual}.
Colores actuales: ${colores.join(', ')}.
Partidas jugadas: ${partidasJugadas}.
Elige una opción:
1. INICIAR JUEGO
2. CAMBIAR MODO
3. CAMBIAR COLORES
4. VER HISTORIAL DE PARTIDAS
5. SALIR
        `);

        switch (opcion) {
            case '1':
                jugarSimon();
                break;
            case '2':
                cambiarModo();
                break;
            case '3':
                cambiarColores();
                break;
            case '4':
                verHistorial();
                break;
            case '5':
                alert('Gracias por jugar. ¡Hasta la próxima!');
                break;
            default:
                alert('Opción no válida.');
        }
    } while (opcion !== '5');
}

// Iniciar el menú principal
menu();
