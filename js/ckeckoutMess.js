//Mensaje checkout
Swal.fire({
    title: 'Gracias por tu compra!',
    html:
        '<h3 class="text-white">Regresar a ' +
        '<a style="text-decoration:none;" href="index.html">Home.</a> ' ,
    showCloseButton: true,
    icon: 'success',
    confirmButtonText: 'Aceptar',
    showCloseButton: true,
    backdrop: true,
	timerProgressBar: true,
    allowOutsideClick: false,
}
)