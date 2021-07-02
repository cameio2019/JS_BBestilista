function solicitar(){
    let noMbre = prompt ("Ingresa tu nombre");
    let apeLlido = prompt ("Ingresa tu Apellido");
    let dIa = prompt ("Ingrese día");
    let mes = "junio";
    
    alert(noMbre + " " + "Tu turno es el día" + dIa + " " + mes + ".");
    Swal.fire(noMbre + " " + "Gracias por tu Reserva" + " " + "Te esperamos" + " " + "😃");
}


