fetch("productos.json")
  .then((response) => response.json())
  .then((productos) => {
    productos.forEach((producto) => {
      if(producto.precio > 100){
        console.log(`Nombre: ${producto.nombre} precio: ${producto.precio} stock: ${producto.stock}`);
      }
    });
  })
  .catch((error) => console.error("Error;", error));
