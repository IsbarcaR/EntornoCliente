const array = [1, 2, 2, 3, 4, 4, 5];

// Usar un Set para eliminar duplicados
const setUnicos = [...new Set(array)];

console.log(setUnicos); // [1, 2, 3, 4, 5]
