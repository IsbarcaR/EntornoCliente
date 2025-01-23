$(document).ready(function () {
  console.log("hola");
  $("#registroForm").validate({
    rules: {
      nombre: {
        required: true,
        minlength: 1,
      },
      email: {
        required: true,
        email: true,
      },
      pass: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      nombre: {
        required: "Nombre no puede estar vacio",
        minlength: "Nombre no puede estar vacio",
      },
      email: {
        required: "Email no puede estar vacio",

        email: "El formato debe ser valido",
      },
      pass: {
        required: "Contraseña no puede estar vacio",
        minlength: "Minimo 6 caracteres",
      },
    },
  });
});
