fetch('persona.json')
.then(response=> response.json())
.then(personas=>{
  personas.forEach((persona) => {
    console.log(`Nombre: ${persona.nombre} edad: ${persona.edad} nota: ${persona.nota + 1}`);
  });
})
.catch((error) => console.error("Error;", error));
