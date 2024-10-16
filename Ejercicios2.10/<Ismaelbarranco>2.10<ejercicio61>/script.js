const map1 = new Map([
    [1, 'Juan'],
    [2, 'María']
]);

const map2 = new Map([
    [1, 'Juan'],
    [2, 'María']
]);

const map3 = new Map([
    [1, 'Juan'],
    [2, 'Pedro']
]);

function compararMaps(mapA, mapB) {
    if (mapA.size !== mapB.size) return false;

    for (let [clave, valor] of mapA) {
        if (!mapB.has(clave) || mapB.get(clave) !== valor) {
            return false;
        }
    }

    return true;
}

console.log(compararMaps(map1, map2)); // true
console.log(compararMaps(map1, map3)); // false
