function solicitar(){
    let noMbre = prompt ("Ingresa tu nombre");
    let apeLlido = prompt ("Ingresa tu Apellido");
    let dIa = prompt ("Ingrese día");
    let hoRa = prompt("Ingresa la hora");
    let mes = "julio";
    
    alert(noMbre + " Tu turno es el día" + dIa + " de " + mes + " a las " + hoRa + " hs.");
    Swal.fire(noMbre + " Gracias por tu Reserva!" + " Te esperamos" + " 😃.");
}


