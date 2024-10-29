// Pedir un nombre al usuario mediante una ventana emergente
const nombre = prompt('Por favor, introduce un nombre:');

// Realizar la petición a la API con el nombre proporcionado
fetch(`https://api.nationalize.io/?name=${nombre}`)
  .then(response => response.json())
  .then(data => {
    if (data.country && data.country.length > 0) {
      // Obtener el país con la mayor probabilidad
      const paisConMayorProbabilidad = data.country.reduce((max, current) => {
        return current.probability > max.probability ? current : max;
      });

      // Mostrar el resultado en la consola
      console.log(`El nombre ${nombre} tiene mayor probabilidad de ser de: ${paisConMayorProbabilidad.country_id} con una probabilidad de ${paisConMayorProbabilidad.probability}`);
    } else {
      console.log(`No se encontraron resultados para el nombre: ${nombre}`);
    }
  })
  .catch(error => {
    console.error('Hubo un problema con la petición Fetch:', error);
  });
