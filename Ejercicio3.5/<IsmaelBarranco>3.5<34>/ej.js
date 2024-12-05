function temporizador(){
    console.log("Inicio del programa");
    setTimeout(()=>console.log("Han pasado 2 segundos"),2000);
    console.log("Fin del programa");
}
temporizador();

function contador(){
   
    console.log("Contador");
    for(let i=1;i<=5;i++){
        setTimeout(()=>console.log(i),1000*i)
    }
};

contador();