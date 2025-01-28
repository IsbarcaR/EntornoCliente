function ruleta() {
  let numero = 0;
  console.log("La ruleta comienza a girar");
  let segundos = Math.floor(Math.random() * (3 - 1) + 1);
  
 setTimeout(() => {while (numero === 0) {
  numero = Math.floor(Math.random() * 10);
  console.log("numero "+numero);
  console.log("Segundos "+segundos);
  if (numero === 0) {
    console.log("La ruleta se ha atascado ");
  } else {
    console.log("Tenemos un ganador");
  }
}
  
 }, 1000*segundos); 
}
ruleta();
