let producto={
   nombre:'Macbook',
   precio: 1500,
   stock: 50

}
let producto2=Object.assign(producto);
console.log("Producto1 stock: " + producto.stock);


producto2.stock=20;

console.log("Producto2 stock: "+ producto2.stock);
