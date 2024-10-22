function simularPeticionAPI(exito = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve("Datos recibidos correctamente.");
            } else {
                reject("Error en la petición a la API.");
            }
        }, 1000); // Simulamos un retraso de 1 segundo
    });
}

async function hacerPeticion() {
    try {
        const respuesta = await simularPeticionAPI(true); // Cambia a false para simular un error
        console.log(respuesta);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("La petición ha terminado.");
    }
}

hacerPeticion();
