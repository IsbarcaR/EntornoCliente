const usuario = {
  nombre: "Usuario",
  edad: 20,
  email: "usuario@test.com",
  password: "123456"
};

function verificarEdad(usuario) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          usuario.edad >= 18 ? resolve(usuario) : reject("El usuario debe ser mayor de 18 años");
      }, 1000);
  });
}

function verificarEmail(usuario) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          /.+@.+\..+/.test(usuario.email) ? resolve(usuario) : reject("Email inválido");
      }, 1000);
  });
}

function verificarPassword(usuario) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          /\d/.test(usuario.password) && usuario.password.length >= 6 ? resolve(usuario) : reject("Contraseña inválida");
      }, 1000);
  });
}

verificarEdad(usuario)
  .then(verificarEmail)
  .then(verificarPassword)
  .then(() => console.log("Registro exitoso"))
  .catch(error => console.log(error));
