const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

// Filtrar los valores que están en set1 pero no en set2
const setDif = new Set([...set1].filter(value => !set2.has(value)));

console.log(setDif); // Set { 1, 2 }
