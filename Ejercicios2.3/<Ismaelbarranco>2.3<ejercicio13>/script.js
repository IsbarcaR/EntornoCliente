let contrasenia="felipeTortas";
let intentos=3;
let introContrasenia;

do{introContrasenia=prompt("Introduce tu contraseña te quedan "+intentos+" intentos: ");
    

}while(introContrasenia!=contrasenia && --intentos>0);
if (introContrasenia==contrasenia) alert("Contraseña correcta");
else alert("Contraseña incorrecta. Te quedaste sin intentos");
