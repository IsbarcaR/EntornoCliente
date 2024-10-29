fetch("persona.json")
  .then((response) => response.json())
  .then((personas) => {
    personas.forEach((persona) => {
      console.log(
        `Nombre: ${persona.nombre} edad: ${persona.edad} `
      );
    });
  })
  .catch((error) => console.error("Error;", error));
