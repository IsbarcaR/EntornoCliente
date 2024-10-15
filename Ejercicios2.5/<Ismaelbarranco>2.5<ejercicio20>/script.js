let toDoList=["correr","flexiones","abdominales","dominadas","comba"];
let tareaAEliminar = "abdominales";
let indice = toDoList.indexOf(tareaAEliminar);

if (indice !== -1) {
    // Si el índice es válido, eliminar el elemento del array usando splice()
    toDoList.splice(indice, 1);
    console.log("Tarea eliminada: " + tareaAEliminar);
} else {
    console.log("Tarea no encontrada");
}

// Mostrar el array actualizado
console.log(toDoList);