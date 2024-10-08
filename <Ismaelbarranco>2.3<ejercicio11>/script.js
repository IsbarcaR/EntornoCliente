let numeroSecreto=12;
let numeroUsuario;
do(numeroUsuario=parseInt(prompt("Adivina el número secreto (entre 1 y 20): ")))
while(numeroUsuario<1 || numeroUsuario>20 || numeroUsuario===numeroSecreto || isNaN(numeroUsuario));
  if(numeroUsuario===numeroSecreto)alert("Enhorabuena has ecertado el número secreto!");
  else if(numeroUsuario<numeroSecreto)alert("Tu número es menor que el secreto. Lo siento");
  else alert("Tu número es mayor que el secreto. Lo siento");
