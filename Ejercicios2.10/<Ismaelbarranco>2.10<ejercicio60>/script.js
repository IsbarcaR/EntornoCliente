const arrayObjetos = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'María' },
    { id: 3, nombre: 'Pedro' }
];

const mapFromArray = new Map(arrayObjetos.map(obj => [obj.id, obj.nombre]));

console.log(mapFromArray);
// Map { 1 => 'Juan', 2 => 'María', 3 => 'Pedro' }
