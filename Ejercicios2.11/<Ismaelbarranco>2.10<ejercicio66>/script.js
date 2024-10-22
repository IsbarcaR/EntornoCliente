function simularLecturaArchivo(exito = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve("Lectura del archivo exitosa.");
            } else {
                reject("Error al leer el archivo.");
            }
        }, 1000); // Simula el tiempo de lectura
    });
}

function simularEscrituraArchivo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Escritura en el archivo completada.");
        }, 1000); // Simula el tiempo de escritura
    });
}

async function manejarArchivo() {
    let archivoAbierto = false;

    try {
        console.log("Abriendo archivo...");
        archivoAbierto = true;
        
        const lectura = await simularLecturaArchivo(false); // Cambia a true para simular éxito en la lectura
        console.log(lectura);

        const escritura = await simularEscrituraArchivo();
        console.log(escritura);
        
    } catch (error) {
        console.error(error);
    } finally {
        if (archivoAbierto) {
            console.log("Cerrando archivo...");
            archivoAbierto = false;
        }
    }
}

manejarArchivo();
