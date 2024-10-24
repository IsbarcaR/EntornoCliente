class Rectangulo{
    constructor(ancho,alto){
        this.alto=alto;
        this.ancho=ancho;
    }
    area(){
        return console.log("Area:"+ this.ancho*this.alto);
    }

}
rectangulo1= new Rectangulo(2,2);
rectangulo1.area();
rectangulo2= new Rectangulo(4,4);
rectangulo2.area();
rectangulo3= new Rectangulo(3,3);
rectangulo3.area();

