let opcion ;
let tareas=[];
let numTarea;
do {
  opcion = parseInt(prompt(
    "Elige una de las siguientes opciones: \n1. Agregar tarea \n2. Modificar tarea \n3 Eliminar tarea \n4 Ver tareas \n5 Salir"
  ));
  switch (opcion) {
    case 1:
        let tarea= prompt("Dime la tarea que desea agregar:");
        tareas.push(tarea);
        alert("Tarea agregada correctamente");
        break;

    case 2:
        numTarea =parseInt(prompt('Dime la tarea que desea modificar: '));
   
            if (numTarea<=tareas.length) {
                alert('Tarea encontrada');
                alert('Esta es la tarea:\n' + tareas[numTarea]);
                tareas[numTarea] = prompt('Dime la nueva tarea o la modificación en su defecto: ');
                alert('Tarea modificada correctamente');
            }else alert('Tarea no encontrada');
        break;
    case 3:
       numTarea = parseInt(prompt('Dime la tarea que desea eliminar: '));
        alert('Tarea encontrada');
        if (numTarea<=tareas.length) {
            let confirm=prompt('Estás seguro de eliminar esta tarea? (s/n)');
            if (confirm.toLowerCase() ==='s') {
                tareas.splice(numTarea, 1);
                alert('Tarea eliminada correctamente');
            }
            else alert('Operación cancelada');
            
        }
        break;
        
    case 4:
        let tareasIndex=[];
       for (let i=0; i<tareas.length;i++){
       tareasIndex.push(i+" : " +tareas[i]);
       }
       alert('Tareas:\n' + tareasIndex.join('\n'));
       break;
}
} while ( opcion != 5);


