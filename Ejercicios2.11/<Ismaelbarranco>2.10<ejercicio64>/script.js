function esPar(num){
    console.log(typeof(num));
    try{
       
        let esPar;
        if(num%2===0){
            console.log(num%2);
            esPar="Es par";
        }else if(isNaN(num)){
            throw new Error("No es un numero")
        }else if(num%2===1){
            console.log(typeof(num%2));
            esPar="Es impar"
        }
        console.log(esPar);

    }catch(error){
        console.log("Error: "+ error.message);

    }
    finally {
        
        console.log("Completado");
    }
}
esPar("1");