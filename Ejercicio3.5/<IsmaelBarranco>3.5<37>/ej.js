const coches = ["🚗", "🏎️", "🚙", "🚓"];

function carrera(coche) {
    console.log(`${coche} ha comenzado la carrera`);
    return new Promise(resolve => {
        const tiempo = Math.random() * 5000 + 1000; // 1-5 segundos
        setTimeout(() => {
            console.log(`${coche} ha terminado en ${tiempo.toFixed(2)} ms`);
            resolve({ coche, tiempo });
        }, tiempo);
    });
}

Promise.race(coches.map(carrera))
    .then(ganador => console.log("El ganador es:", ganador.coche));

Promise.all(coches.map(carrera))
    .then(resultados => console.log("Clasificación final:", resultados));
