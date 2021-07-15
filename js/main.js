function solicitar(){
    let noMbre = prompt ("Ingresa tu nombre:");
    let apeLlido = prompt ("Ingresa tu Apellido:");
    var dIa = parseInt(prompt("Ingrese día:",0));
    var hoRa = parseInt(prompt("Ingresa la hora:",0));
    let mes = "Julio";

    //chequeamos si la fecha es correcta.
    if ((dIa >= 1) && ((dIa <= 31))){
        Swal.fire(noMbre + " Gracias por tu Reserva!" + " Tu turno es el día " + dIa + " de " + mes + " a las " + hoRa + " hs. "+ " Te esperamos" + " 😃.");
    }
    else {
        alert("Por favor ingrese una fecha correcta. Disponible del 1 al 31.");
        let fechaCorregida = parseInt(prompt("Ingrese día:",0));
        if ((fechaCorregida >= 1) && ((fechaCorregida <= 31))){
            alert(noMbre + " Gracias por tu Reserva!" + " Tu turno es el día " + fechaCorregida + " de " + mes + " a las " + hoRa + " hs. "+ " Te esperamos" + " 😃.");
    } 
    }

    //chequeamos si la hora es correcta.
    if ((hoRa >= 1) && ((hoRa <= 24))){
        Swal.fire(noMbre + " Gracias por tu Reserva!" + " Tu turno es el día " + dIa + " de " + mes + " a las " + hoRa + " hs. "+ " Te esperamos" + " 😃.");
    }
    else {
        alert("Por favor ingrese una hora correcta. Abrimos de las 9 a 21 Hs. 😉");
        let horaCorregida = parseInt(prompt("Ingrese la hora:",0));
        if ((horaCorregida >= 1) && ((horaCorregida <= 24))){
            Swal.fire(noMbre + " Gracias por tu Reserva!" + " Tu turno es el día " + dIa + " de " + mes + " a las " + horaCorregida + " hs. "+ " Te esperamos" + " 😃.");
        }
    }
}


function verificar(){
    for (let i = 1; i <=5; i++) {
        let nombre2 = prompt("Ingresa tu nombre:");
        let consulta = parseInt(prompt("Ingresa otra fecha por favor."));
        let mes2 = "Julio";
        Swal.fire(nombre2+ " Tenes el Turno N " +i+ " Te esperamos 😉");
    }
}

function cortes(){
    let tipodeCorte = prompt("Ingresa el tipo de Corte:");

    while(tipodeCorte != "ESC" ){
        switch (tipodeCorte) {
            case "americana":
                alert("ELEGISTE AMERICANA");
                break;
            case "carre":
                alert("ELEGISTE CARRE");
                break;
            default:
                alert("Que tipo de corte elegis?");
        }
    }
}