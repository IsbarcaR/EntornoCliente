let estudiante={nombre:'ismael',edad:'25',curso:'2ºdaw'}
for(prop in estudiante){
   console.log(prop);
   console.log(estudiante[prop]);
}
delete estudiante.edad;
console.log('Apartado 2: Comprobando si la propiedad edad existe en el objeto');
for(prop in estudiante){
   console.log(prop);
   console.log(estudiante[prop]);
}
