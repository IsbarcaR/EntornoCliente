class Producto {
  static contadorIdProducto = 0;

  constructor(nombre, precio, stock) {
      Producto.contadorIdProducto++;
      this.id = Producto.contadorIdProducto;
      this.nombre = nombre;
      this.precio = parseFloat(precio.replace("€", "")); // Convertir precio a número
      this.stock = stock;
  }

  mostrarInfo() {
      return console.log(`ID: ${this.id}, Nombre: ${this.nombre}, Precio: ${this.precio}€, Stock: ${this.stock}`);
  }
}

class Tienda {
  constructor() {
      this.productos = new Map();
      this.clientes = new Set();
      this.ventas = [];
  }

  agregarProducto(producto) {
      this.productos.set(producto.id, producto);
  }

  registrarCliente(nombreCliente) {
      if (!this.clientes.has(nombreCliente)) {
          this.clientes.add(nombreCliente);
          console.log(`Cliente registrado: ${nombreCliente}`);
      }
  }

  actualizarStock(idProducto, cantidad) {
      if (!this.productos.has(idProducto)) {
          console.log("Producto no encontrado");
          return;
      }

      const producto = this.productos.get(idProducto);
      producto.stock += cantidad; // Modifica el stock directamente
      console.log(`Stock actualizado de ${producto.nombre}: ${producto.stock}`);
  }

  realizarVenta(nombreCliente, idProducto, cantidad) {
      // Comprobar si el cliente está registrado
      this.registrarCliente(nombreCliente);

      // Verificar si hay suficiente stock del producto
      if (!this.productos.has(idProducto)) {
          console.log("Producto no encontrado");
          return;
      }

      const producto = this.productos.get(idProducto);

      if (producto.stock < cantidad) {
          console.log("No hay suficiente stock para realizar la venta");
          return;
      }

      // Actualizar stock del producto
      producto.stock -= cantidad;

      // Calcular total de la venta
      const totalVenta = producto.precio * cantidad;

      // Añadir venta al array de ventas
      this.ventas.push({
          cliente: nombreCliente,
          producto: producto.nombre,
          cantidad: cantidad,
          total: totalVenta,
      });

      // Mostrar resumen de la venta
      console.log(`Venta realizada:\nCliente: ${nombreCliente}\nProducto: ${producto.nombre}\nCantidad: ${cantidad}\nTotal: ${totalVenta}€`);
  }

  mostrarVentas() {
      if (this.ventas.length === 0) {
          console.log("No se han realizado ventas.");
          return;
      }

      console.log("Ventas realizadas:");
      for (const venta of this.ventas) {
          console.log(`Cliente: ${venta.cliente}, Producto: ${venta.producto}, Cantidad: ${venta.cantidad}, Total: ${venta.total}€`);
      }
  }

  productosSinStock() {
      const sinStock = [...this.productos.values()].filter(producto => producto.stock === 0);
      if (sinStock.length === 0) {
          console.log("No hay productos sin stock.");
      } else {
          console.log("Productos sin stock:");
          sinStock.forEach(producto => console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}`));
      }
  }

  ventasPorCliente(nombreCliente) {
      const ventasCliente = this.ventas.filter(venta => venta.cliente === nombreCliente);
      if (ventasCliente.length === 0) {
          console.log(`No se encontraron ventas para el cliente: ${nombreCliente}`);
      } else {
          console.log(`Ventas realizadas por ${nombreCliente}:`);
          ventasCliente.forEach(venta => console.log(`Producto: ${venta.producto}, Cantidad: ${venta.cantidad}, Total: ${venta.total}€`));
      }
  }

  calcularTotalIngresos() {
      const totalIngresos = this.ventas.reduce((total, venta) => total + venta.total, 0);
      console.log(`Total de ingresos obtenidos: ${totalIngresos}€`);
      return totalIngresos;
  }
}

// Ejemplo de uso
const tienda = new Tienda();

// Crear productos
const producto1 = new Producto("Gato", "2€", 5);
const producto2 = new Producto("Perro", "5€", 3);
const producto3 = new Producto("Pececito", "1€", 0);
const producto4 = new Producto("Loro", "10€", 2);
const producto5 = new Producto("Tortuga", "15€", 0);

tienda.agregarProducto(producto1);
tienda.agregarProducto(producto2);
tienda.agregarProducto(producto3);
tienda.agregarProducto(producto4);
tienda.agregarProducto(producto5);

// Realizar algunas ventas
tienda.realizarVenta("Juan Pérez", 1, 2); // Venta válida
tienda.realizarVenta("María Gómez", 2, 5); // No hay suficiente stock
tienda.realizarVenta("Juan Pérez", 1, 3); // Venta válida
tienda.realizarVenta("Juan Pérez", 3, 1); // Venta válida
tienda.realizarVenta("María Gómez", 4, 1); // Venta válida

// Mostrar productos y ventas
console.log("\nInventario:");
tienda.productos.forEach(producto => producto.mostrarInfo());

console.log("\nResumen de ventas:");
tienda.mostrarVentas();

console.log("\nProductos sin stock:");
tienda.productosSinStock();

console.log("\nVentas realizadas por Juan Pérez:");
tienda.ventasPorCliente("Juan Pérez");

console.log("\nVentas realizadas por María Gómez:");
tienda.ventasPorCliente("María Gómez");

console.log("\nTotal de ingresos:");
tienda.calcularTotalIngresos();
