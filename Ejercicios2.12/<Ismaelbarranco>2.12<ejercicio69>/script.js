class Persona{
    constructor(nombre,edad,trabajo){
        this.nombre=nombre;
        this.edad=edad;
        this.trabajo= trabajo;
    }
    cambioTrabajo(trabajo){
        this.trabajo=trabajo
        return console.log(this.trabajo)
    }

}

persona1= new Persona("ismael",25,"estudiante");
persona2= new Persona("juan",25,"estudiante");
persona3= new Persona("adri",25,"estudiante");
persona1.cambioTrabajo("alafarero");
persona2.cambioTrabajo("minero");
persona3.cambioTrabajo("albañil");