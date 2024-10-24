class Coche{
    constructor(marca,modelo,anio){
        this.marca= marca;
        this.modelo= modelo;
        this.anio= anio;

    }
    descripcion(){
        return console.log(`Marca ${this.marca}, modelo ${this.modelo}, año ${this.anio} `);
    }
}
coche1= new Coche("lamborghini","aventador svj",2013);
coche1.descripcion();
coche2= new Coche("porsche","911 gt3rs",2024);
coche2.descripcion();
coche3= new Coche("ferrari","812 superfast",2018);
coche3.descripcion();