let empresa={
   nombre:'Abalo',
   ubicacion:'Martos',
   empleado:[{
      nombre:'Ismael',
      salario:25,
      puesto:'Desarrollador'
   }]

}
for (prop in empresa) {
   console.log(prop);
   console.log(empresa[prop]);
   
}