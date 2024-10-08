// Inicializar el tablero 2D (10x10)
let tablero = [
    [' ', ' ', ' ', '🍎', ' ', ' ', '🧱', ' ', '🍎', ' '],
    [' ', '🧱', ' ', ' ', '🧱', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', '🧱', ' ', ' ', ' '],
    ['🍎', ' ', ' ', '🧱', ' ', ' ', ' ', ' ', '🍎', ' '],
    [' ', ' ', '🧱', ' ', ' ', '🍎', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '🧱', ' ', ' ', ' ', '🧱', ' '],
    [' ', '🍎', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '🧱', ' ', '🍎', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['🍎', ' ', ' ', ' ', ' ', ' ', ' ', '🧱', ' ', '🍎']
  ];
  
  // Inicializar la posición de la víbora
  let viborita = { fila: 0, columna: 0 };
  
  // Mostrar el tablero en consola
  function mostrarTablero() {
    for (let i = 0; i < tablero.length; i++) {
        let fila = [...tablero[i]];
        // Colocar la víbora en su posición actual
        if (i === viborita.fila) {
            fila[viborita.columna] = '🐍';
        }
        console.log(fila.join(' '));
    }
    console.log('');
  }
  
  // Función para verificar si hay una manzana en la posición actual
  function hayManzana(fila, columna) {
    return tablero[fila][columna] === '🍎';
  }
  
  // Función para mover la víbora
  function moverViborita(direccion) {
    let nuevaFila = viborita.fila;
    let nuevaColumna = viborita.columna;
  
    if (direccion === 'ARRIBA') {
        nuevaFila = (viborita.fila - 1 + tablero.length) % tablero.length;
    } else if (direccion === 'ABAJO') {
        nuevaFila = (viborita.fila + 1) % tablero.length;
    } else if (direccion === 'DERECHA') {
        nuevaColumna = (viborita.columna + 1) % tablero[0].length;
    } else if (direccion === 'IZQUIERDA') {
        nuevaColumna = (viborita.columna - 1 + tablero[0].length) % tablero[0].length;
    }
  
    // Verificar si la nueva posición está bloqueada (es un ladrillo)
    if (tablero[nuevaFila][nuevaColumna] === '🧱') {
        console.log("¡No puedes moverte a esa casilla, está bloqueada!");
        return;
    }
  
    // Si hay una manzana, la "come" y se elimina del tablero
    if (hayManzana(nuevaFila, nuevaColumna)) {
        console.log("¡Has comido una manzana!");
        tablero[nuevaFila][nuevaColumna] = ' '; // Eliminar la manzana
    }
  
    // Actualizar la posición de la víbora
    viborita.fila = nuevaFila;
    viborita.columna = nuevaColumna;
  }
  
  // Función para contar cuántas manzanas quedan en el tablero
  function contarManzanas() {
    let contador = 0;
    for (let fila of tablero) {
        for (let casilla of fila) {
            if (casilla === '🍎') {
                contador++;
            }
        }
    }
    return contador;
  }
  
  // Función principal del juego
  function jugar() {
    while (contarManzanas() > 0) {
        mostrarTablero();
        
        // Pedir la dirección al jugador
        let direccion = prompt("Ingresa la dirección para mover la víbora (ARRIBA, DERECHA, ABAJO, IZQUIERDA):");
        moverViborita(direccion);
        console.clear(); // Limpia la consola para actualizar el tablero
    }
  
    // Mostrar el tablero final cuando el juego termine
    console.log("¡Felicidades, has comido todas las manzanas!");
    mostrarTablero();
  }
  
  // Iniciar el juego
  jugar();
  