let animal={
   hablar:function(Mensaje){
      return console.log(Mensaje);
   }
}
animal.hablar('El animal esta hablando');

let perro=Object.create(animal);

perro.hablar=function(){
   return console.log('Guau');
}
perro.hablar();