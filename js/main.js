const  solicitar = ()=>{ 
    const { value:dia, value:hora } =  Swal.fire({
        title: 'Reserva de Turno',
        confirmButtonText: 'Enviar',
        showCloseButton: true,
        html:
            '<input id="nombre" placeholder="Nombre" class="swal2-input">' +
            '<input id="apellido" placeholder="Apellido" class="swal2-input">' +
            '<input id="dia" placeholder="Dia" class="swal2-input">' +
            '<input id="hora" placeholder="Hora" class="swal2-input">' +
            '<input id="comentario" placeholder="Comentarios" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
            return [
            document.getElementById('nombre').value,
            document.getElementById('apellido').value,
            document.getElementById('dia').value,
            document.getElementById('hora').value,
            document.getElementById('comentario').value,

            // Swal.fire(`Tu Reserva fue realizada con éxito. 
            //             Te esperamos 😃`)

            Swal.fire({
                title: 'Tu Reserva fue realizada con éxito. Te esperamos 😃!',
                showCloseButton: true,
                icon: 'success',
                confirmButtonText: 'Aceptar',
                showCloseButton: true,
                backdrop: true,
                timerProgressBar: true,
                allowOutsideClick: false
            }
            )
        ]
        }
    })

    if (dia) {
        Swal.fire(JSON.stringify(dia))
    }

    if (hora) {
        Swal.fire(JSON.stringify(hora))
    }
};

// Funcion Agregar al carrito
$(function() {
    "use strict"
    
    let init = "0";
    let counter = 0;
    // Iniciando el carrito
    $(".counter").html(init);
    
    // Agregando Items al carrito
    function agregarAlcarrito() {
        counter++;
        $(".counter").html(counter).animate({
        'opacity' : '0'
        },300, function() {
        $(".counter").delay(300).animate({
            'opacity' : '1'
        })
        })
    }

    // Agregar al carrito animacion
    $(".addContador").on("click", function() {
        agregarAlcarrito(); $(this).parent().parent().find(".product_overlay").css({
        'transform': ' translateY(0px)',
        'opacity': '1',
        'transition': 'all ease-in-out .45s'
        }).delay(1500).queue(function() {
        $(this).css({
            'transform': 'translateY(-500px)',
            'opacity': '0',
            'transition': 'all ease-in-out .45s'
        }).dequeue();
    });
    });
});

//Implement. MP API - Sandbox

$(document).ready(function(){
    $("#boton-comprar2").click(function(){
    //MP SDK 
    const mp = new MercadoPago('TEST-a18d84ba-5d28-4d88-9053-4a5e61f1c647', {locale: 'es-AR'});
    
    //Web Tokenize Checkout
    mp.checkout({
        tokenizer: {
        totalAmount: 4000,
        backUrl: 'https://cameio2019.github.io/JS_BBestilista/paymentMethod.html' //el redirect funciona cuando se encuentra en Webserver  y con backend.
        },
        render: {
        container: '#boton-comprar2', 
        // label: 'Pagar' 
        }
    });
    });
});

//Function Toast
const  gracias = ()=>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        showCloseButton: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: 'success',
        position: 'bottom',
        title: 'Servicio Seleccionado.'
    })
}


$("#bienvenida").append('<div> <h1 class="bien">Nuestros Servicios nos diferencia</h1> </div>'); 
$(".bien").css({
    "color": "#5a189a",     
    "background-color": "white",
    "opacity": "0.6",
});

ScrollReveal().reveal('.titBien', { delay: 2000 });

