let peliculaElegida=prompt("Ingrese el nombre de una película de la lista:\n Origen(inception),\n  La La Land,\n  Avengers: Endgame,\n The Shawshank Redemption,\n  El Señor de los Anillos: La Comunidad del Anillo");
switch (peliculaElegida.toLowerCase())  { 
  case "origen(inception)":
    alert("Su ticket ha sido emitido para su película de acción y aventura basada en el mito de Inception.");
    break;
  case "la la land":
    alert("Su ticket ha sido emitido para su película de drama y romance basada en la novela de Jeff Bezos.");
    break;
  case "avengers: endgame":
    alert("Su ticket ha sido emitido para su película de acción y aventura basada en el francés-estadounidense superheroíco de Marvel Comics.");
    break;
  case "the shawshank redemption":
    alert("Su ticket ha sido emitido para su película de drama y suspense basada en la novela de Steven Spielberg.");
    break;
  case "el señor de los anillos: la comunidad del anillo":
    alert("Su ticket ha sido emitido para su película de fantasía y aventura basada en el mito de J.R.R. Tolkien.");
    break;
}