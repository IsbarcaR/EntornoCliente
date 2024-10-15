const set = new Set([1, 2, 3]);
const set2= new Set([2,3,4]);

const set3= new Set([...set,...set2]);// con new set creamos y los ... combinamos varios set que no repiten los valores


console.log(set3); 