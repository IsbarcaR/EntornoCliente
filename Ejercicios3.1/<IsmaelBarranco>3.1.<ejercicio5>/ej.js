let persona={
  nombre: "Ismael",
  correo:"ibc@si.com",
  edad: 25
}

let jsonData=JSON.stringify(persona);
fetch('https://api.ejemplo.com/enviar',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: jsonData
})
.then(response => response.json())
.then(data =>console.log('Exito:', data))
.catch(error => console.error('Error: ', error));