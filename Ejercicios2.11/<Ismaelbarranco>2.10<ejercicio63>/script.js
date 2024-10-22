function operarNumeros(num1, num2, operacion) {
    try {
      let resultado;
      switch (operacion) {
        case 'suma':
          resultado = num1 + num2;
          break;
        case 'resta':
          resultado = num1 - num2;
          break;
        case 'multiplicacion':
          resultado = num1 * num2;
          break;
        case 'division':
          if (num2 === 0) {
            throw new Error("No se puede dividir por cero.");
          }
          resultado = num1 / num2;
          break;
        default:
          throw new Error("Operación no válida.");
      }
      console.log(`El resultado de la ${operacion} es: ${resultado}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    } finally {
      console.log("Operación completada.");
    }
  }
  
  // Ejemplo de uso
  operarNumeros(10, 0, 'division');  // Lanza un error por división entre cero
  operarNumeros(10, 5, 'multiplicacion');  // Funciona correctamente