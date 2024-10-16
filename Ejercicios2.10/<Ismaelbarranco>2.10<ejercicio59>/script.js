var persona= new Map([
    ['nombre',"pepe"],
    ['edad','22']
    
]);
var destino= new Map([
    ['ciudad',"Madrid"],
    ['pais','Spain']
    
]);

var mapComb= new Map([...persona,...destino]);
console.log(mapComb);
