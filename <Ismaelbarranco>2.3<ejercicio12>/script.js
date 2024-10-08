let chupitos;
do {
    chupitos = prompt("Cuantos chupitos te has tomado crack?");
} while (isNaN(chupitos)||chupitos=="");
let conducir=(chupitos>0)?"No puedes conducir":" Bien hecho puedes conducir";
alert(conducir);