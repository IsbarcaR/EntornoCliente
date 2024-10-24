class Empleado{
    constructor(nombre,salario){
        this.nombre=nombre;
        this.salario=salario;
    }
    trabajar(){
        return console.log(`${this.nombre} esta trabajando`);
    }
}
class Gerente extends Empleado{
    dirigir(){
        return console.log(`Gerente: ${this.nombre } dirigiendo`)
    }
}
empleado1= new Empleado("Felipe",2500);
gerente1= new Gerente("Ismael",25000);
empleado1.trabajar();
gerente1.dirigir();