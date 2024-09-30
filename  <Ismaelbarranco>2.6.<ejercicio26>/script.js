// Colores posibles
const colores = ['rojo', 'azul', 'verde', 'amarillo'];

// Función para generar un color aleatorio
function colorAleatorio() {
    return colores[Math.floor(Math.random() * colores.length)];
}

// Función para jugar el juego
function jugarSimon() {
    let secuencia = [];
    let rondasSuperadas = 0;
    let maxRondas = 0;
    
    // Preguntar si se quiere jugar indefinidamente o elegir un número de rondas
    let jugarIndefinido = prompt('¿Quieres jugar indefinidamente? (S/N)').toLowerCase() === 's';

    if (!jugarIndefinido) {
        maxRondas = parseInt(prompt('¿Cuántas rondas te gustaría jugar?'));
    }

    // Ciclo principal del juego
    while (jugarIndefinido || rondasSuperadas < maxRondas) {
        // Agregar un color a la secuencia
        secuencia.push(colorAleatorio());
        alert('Secuencia actual: ' + secuencia.join(', '));

        // Pedirle al usuario que repita la secuencia
        for (let i = 0; i < secuencia.length; i++) {
            let respuesta = prompt('Ingresa el color número ' + (i + 1) + ' de la secuencia:').toLowerCase();

            if (respuesta !== secuencia[i]) {
                alert('¡Te equivocaste! La secuencia era: ' + secuencia.join(', '));
                alert('Rondas superadas: ' + rondasSuperadas);
                return; // Termina el juego
            }
        }

        // Si se llega hasta aquí, la secuencia fue correcta
        rondasSuperadas++;
        alert('¡Correcto! Has superado la ronda ' + rondasSuperadas);
        
        if (!jugarIndefinido && rondasSuperadas === maxRondas) {
            alert('¡Felicidades! Has ganado después de ' + maxRondas + ' rondas.');
            return; // Termina el juego si el jugador alcanzó el número de rondas elegidas
        }
    }
}

// Iniciar el juego
jugarSimon();
