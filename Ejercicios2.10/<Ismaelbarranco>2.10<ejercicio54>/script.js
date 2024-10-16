const persona = new Map();

persona.set('nombre', 'Ismael');
persona.set('edad','25');
persona.set('apellido','Martos');
console.log(persona);
persona.delete('edad');//borrar edad
console.log(persona);