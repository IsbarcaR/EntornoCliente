const set1 = new Set([1, 2]);
const set2 = new Set([1,2,3,4]);

// Verificar si hay algún valor común
if ([...set2].some(value => set1.has(value))) {
    console.log("Tiene los valores");
}

