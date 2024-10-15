const objetos = [
  { id: 1, nombre: "Objeto 1" },
  { id: 2, nombre: "Objeto 2" },
  { id: 1, nombre: "Objeto 1 duplicado" },
  { id: 3, nombre: "Objeto 3" },
  { id: 4, nombre: "Objeto 4" },
  { id: 2, nombre: "Objeto 2 duplicado" },
];

// Usar un Set para almacenar IDs únicos
const idsUnicos = new Set();
const objetosSinDuplicados = [];

for (let i = 0; i < objetos.length; i++) {
    const objeto = objetos[i];
    if (!idsUnicos.has(objeto.id)) {
        idsUnicos.add(objeto.id); // Añadir el ID al Set
        objetosSinDuplicados.push(objeto); // Añadir el objeto al nuevo array
    }
}

console.log(objetosSinDuplicados);