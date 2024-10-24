class Configuracion{
    static instancia=null;// hay que definir la instancia para que no se pueda cambiar los valores de la clase ya que lo comprueba en el if si esta definido
    constructor(idioma){
        if(Configuracion.instancia){
            return Configuracion.instancia;
        }
        this.idioma= idioma;
        Configuracion.instancia=this;
    }
   verConfig(){
    return console.log("Este es el idioma de la configuracion "+ this.idioma);
   }
}
config1= new Configuracion("Español ");
config2= new Configuracion("Ingles");

config1.verConfig();
config2.verConfig();