let coche ={marca:'BMW',modelo:'M4cs',anio:'2015'};
console.log(coche.anio);
coche.anio = '2017';
console.log(coche.anio);
 coche.color='rojo';
 console.log(coche.color);

 for (propiedad in coche){
    console.log(propiedad);
 }