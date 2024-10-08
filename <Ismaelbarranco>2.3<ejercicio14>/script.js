let numero;

do {numero= prompt("Introduce un número:")} while (isNaN(numero));
document.write("La tabla de multiplicar del número introducido es:<br> ");
for(let i=1;i<=10;i++){
    document.write(numero+"x"+i+" = "+numero*i+"<br>");
}
