function facturacion(precio,pago){
    let descuento = 0;
    if(precio>200 && precio<400){
        pago.toUpperCase();
        switch(pago){
            case "E":
                descuento = 0.30;
                break;
            case "D":
                descuento = 0.20;
                break;
            case "C":
                descuento = 0.10;
                break;
            
        }
    }else if(precio>=400){
        descuento = 0.40;
    }
    return alert("El monto a abonar es de "+ (precio -(precio* descuento)));
}
facturacion(350,"D");