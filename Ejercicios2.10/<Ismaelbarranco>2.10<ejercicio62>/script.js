const arrayConDuplicados = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'María' },
    { id: 3, nombre: 'Pedro' },
    { id: 2, nombre: 'María' }, // Duplicado
    { id: 3, nombre: 'Pedro' }, // Duplicado
    { id: 4, nombre: 'Ana' }
];

function eliminarDuplicados(arr) {
    const map = new Map();

    for (const obj of arr) {
        // Se añade al Map con el id como clave
        if (!map.has(obj.id)) {
            map.set(obj.id, obj);
        }
    }

    // Convertir el Map en un array de objetos sin duplicados
    return Array.from(map.values());
}

const arraySinDuplicados = eliminarDuplicados(arrayConDuplicados);

console.log(arraySinDuplicados);
// [{ id: 1, nombre: 'Juan' }, { id: 2, nombre: 'María' }, { id: 3, nombre: 'Pedro' }, { id: 4, nombre: 'Ana' }]
