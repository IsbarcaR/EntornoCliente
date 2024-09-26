let num;

do {num=parseInt(prompt("Ingrese un número entero positivo:"));}
while (num<=0 || isNaN(num));

if(num%2==0)alert(num+ " es par")
  else alert(num+" es impar");


