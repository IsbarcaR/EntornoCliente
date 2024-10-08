// Crear un array 2D que representa el tablero
let tablero = [
    ['💣', ' ', ' ', ' ', '💣'],
    [' ', '💣', ' ', ' ', ' '],
    [' ', ' ', ' ', '💣', ' '],
    ['💣', ' ', ' ', ' ', ' '],
    [' ', ' ', '💣', ' ', ' ']
  ];
  
  // Copia del tablero para mostrar el progreso del jugador
  let tableroVisible = [
    ['❓', '❓', '❓', '❓', '❓'],
    ['❓', '❓', '❓', '❓', '❓'],
    ['❓', '❓', '❓', '❓', '❓'],
    ['❓', '❓', '❓', '❓', '❓'],
    ['❓', '❓', '❓', '❓', '❓']
  ];
  
  // Función para mostrar el tablero actual visible para el jugador
  function mostrarTablero() {
    for (let i = 0; i < tableroVisible.length; i++) {
      console.log(tableroVisible[i].join(" "));
    }
  }
  
  // Función para contar cuántas casillas vacías quedan por descubrir
  function contarCasillasVacias(tableroVisible) {
    let contador = 0;
    for (let fila of tableroVisible) {
      for (let casilla of fila) {
        if (casilla === '❓') {
          contador++;
        }
      }
    }
    return contador;
  }
  
  // Función principal para jugar
  function jugar() {
    let sigueJugando = true;
  
    while (sigueJugando) {
      mostrarTablero();
      
      // Pedir coordenadas al jugador
      let fila = parseInt(prompt("Ingresa el número de fila (0-4):"));
      let columna = parseInt(prompt("Ingresa el número de columna (0-4):"));
  
      // Verificar si las coordenadas son válidas
      if (fila < 0 || fila > 4 || columna < 0 || columna > 4) {
        console.log("Coordenadas inválidas. Intenta nuevamente.");
        continue;
      }
  
      // Revisar la casilla
      if (tablero[fila][columna] === '💣') {
        // Si hay una mina, el jugador pierde
        console.log("¡BOOM! Has encontrado una mina. Juego terminado.");
        sigueJugando = false;
      } else if (tableroVisible[fila][columna] !== '❓') {
        // Si la casilla ya fue descubierta
        console.log("Esta casilla ya ha sido descubierta. Intenta con otra.");
      } else {
        // Si la casilla es vacía
        tableroVisible[fila][columna] = '⬜'; // Descubrir la casilla
        let casillasRestantes = contarCasillasVacias(tableroVisible);
  
        if (casillasRestantes === 5) { // Solo quedan casillas con minas
          console.log("¡Felicidades! Has descubierto todas las casillas vacías. ¡Ganaste!");
          sigueJugando = false;
        }
      }
    }
  
    // Mostrar el tablero final (descubierto)
    console.log("Tablero final:");
    mostrarTablero();
  }
  
  // Iniciar el juego
  jugar();
  