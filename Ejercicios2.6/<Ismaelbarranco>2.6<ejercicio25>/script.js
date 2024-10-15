let vidaJg = 100;
let vidaMontruo = 70;
let pociones = 3;
let ataqueJgMax = 10;
let ataqueMontruoMax = 15;
let curacionPocion = 20;
let opcion;

function accion(vidaJG, vidaMontruo, pociones) {
    let ataqueMontruo = Math.floor(Math.random() * ataqueMontruoMax +1);
    alert('Monstruo: atacó y hizo ' + ataqueMontruo + ' de daño al jugador');
    vidaJG -= ataqueMontruo;
    alert('Vida jugador: ' + vidaJG + '\nVida del monstruo: ' + vidaMontruo + '\nPociones: ' + pociones);
    return vidaJG; // Devuelvo la vida del jugador actualizada
}
function tomaPoti(potis,curacionPocion,vidaJG){
    if(potis>0){
        alert('Has tomado una poción');
        vidaJG+=Math.floor(Math.random() * curacionPocion+1);
        pociones--;
        
    }
    return vidaJG; // Devuelvo la vida del jugador actualizada
}

function buscarPocion (pociones){
    let posibilidad=Math.floor(Math.random() * (4)+1);
    if(posibilidad===1){
        alert('Has encontrado una poción');
        pociones+=1;
    }else alert('No has encontrado una poción');
    return pociones; // Devuelvo la cantidad de pociones actualizada
}
do {
    opcion = prompt('Elige una de las siguientes opciones:\nA. Atacar\nB. Usar poción\nC. Buscar pocion\nD. Salir');
    switch (opcion.toLocaleLowerCase()) {
        case 'a':
            let ataque = Math.floor(Math.random() * ataqueJgMax+1);
            alert('Jugador: atacó y hizo ' + ataque + ' de daño al monstruo');
            vidaMontruo -= ataque;
            vidaJg = accion(vidaJg, vidaMontruo, pociones); // Actualizamos la vida del jugador
            break;

        // Puedes añadir más casos para otras opciones aquí (usar poción, buscar poción, salir, etc.)
        case 'b':
            tomaPoti(pociones, curacionPocion, vidaJg);
            accion(vidaJg, vidaMontruo, pociones);
            break;
        case 'c':
           pociones= buscarPocion(pociones);
            accion(vidaJg, vidaMontruo, pociones);
            break;

    }
  

} while (vidaJg > 0 && vidaMontruo > 0 && opcion != 'd'); // Corrección en el while
if (vidaJg>0){
    alert('Has ganado!');
}else alert('Has perdido!');