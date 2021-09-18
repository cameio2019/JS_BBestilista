//Modal Turnos

const  exampleModal =  document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
    let button = event.relatedTarget
  // Extract info from data-bs-* attributes
    let recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
    let modalTitle = exampleModal.querySelector('.modal-title')
    let modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = 'Reserva de Turno' 
    modalBodyInput.value = recipient
    let nombreInput = document.getElementById("nombre");
    let apellidoInput = document.getElementById("apellido");
    let diaInput = document.getElementById("dia");
    let horaInput = document.getElementById("hora");
    
    const turnosInfo = JSON.parse(localStorage.getItem("turnosInfo"));
    
    if (turnosInfo) {
        nombreInput.value = turnosInfo.nombre;
        apellidoInput.value = turnosInfo.apellido;
        diaInput.value = turnosInfo.dia;
        horaInput.value = turnosInfo.hora;
    }
    
    document
    .getElementById("modalForm")
    .addEventListener("submit", function (event){
        event.preventDefault();
    
        let nombre = turnosInfo.nombre.trim();
        let apellido = turnosInfo.apellido.trim();
        let dia = turnosInfo.dia.trim();
        let hora = turnosInfo.hora.trim();
    
        if(!nombre || !apellido || !dia || !hora)   {
            return;
    };
    
    const turnosInfo = {
        nombre: nombre,
        apellido: apellido,
        dia: dia,
        hora: hora,
    };
    
    localStorage.setItem("turnosInfo", JSON.stringify(turnosInfo));

    
});

});

const  solicitar = ()=>{ 
    Swal.fire('Gracias por tu Reserva.  Te esperamos 😃')
}

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
        backUrl: 'http://127.0.0.1:5500/paymentMethod.html' //el redirect funciona cuando se encuentra en Webserver
        },
        render: {
        container: '#boton-comprar2', 
        // label: 'Pagar' 
        }
    });
    });
});


// const solicitar = ()=>{

//     // const { value: formDatos } = await Swal.fire({
//     //     title: 'Ingresa tus Datos',
//     //     html:
//     //         '<input id="swal-nombre" class="swal2-input" placeholder="Ingrese su Nombre">' +
//     //         '<input id="swal-apellido" class="swal2-input" placeholder="Ingrese su Apellido">',
//     //     focusConfirm: false,
//     //     preConfirm: () => {
//     //         return [
//     //         document.getElementById('swal-nombre').value,
//     //         document.getElementById('swal-apellido').value
//     //     ]
//     //     }
//     // })
    
//     // if (formDatos) {
//     //     Swal.fire(JSON.stringify(formDatos))
//     // }

//     // const { value: fecha } = await Swal.fire({
//     //     title: 'Septiembre',
//     //     input: 'select',
//     //     inputOptions: {
//     //     'Dia': {
//     //         1: '1',
//     //         2: '2',
//     //         3: '3',
//     //         4: '4',            
//     //         5: '5',
//     //         6: '6',
//     //         7: '7',
//     //         8: '8',
//     //         9: '9',
//     //         10: '10',
//     //         11: '11',
//     //         12: '12',
//     //         13: '13',
//     //         14: '14',
//     //         15: '15',            
//     //         16: '16',
//     //         17: '17',
//     //         18: '18',
//     //         19: '19',
//     //         20: '20',
//     //         21: '21',
//     //         22: '22',
//     //         23: '23',
//     //         24: '24',
//     //         25: '25',
//     //         26: '26',            
//     //         27: '27',
//     //         28: '28',
//     //         29: '29',
//     //         30: '30',
//     //         31: '31'
//     //         },
//     //     },
//     //     inputPlaceholder: 'Fechas Disponibles',
//     //     showCancelButton: true,
//     //     })

//     //     const { value: hora } = await Swal.fire({
//     //         title: 'Horario Disponible',
//     //         input: 'select',
//     //         inputOptions: {
//     //         'Hora': {
//     //             9: '09:00',
//     //             10: '10:00',
//     //             11: '11:00',
//     //             12: '12:00',
//     //             13: '13:00',
//     //             14: '14:00',
//     //             15: '15:00',            
//     //             16: '16:00',
//     //             17: '17:00',
//     //             18: '18:00',
//     //             19: '19:00',
//     //             20: '20:00',
//     //             21: '21:00',
//     //             22: '22:00',
//     //             23: '23:00',
//     //             24: '24:00'
//     //             },
//     //         },
//     //         inputPlaceholder: 'Horas Disponibles',
//     //         showCancelButton: true,
//     //         })
        
//     //     if (fecha) {
//     //     Swal.fire(`Tu Reserva es el día  ${fecha} de julio a las ${hora}.  Te esperamos 😃`)
//     // }
//     Swal.fire('Tu Reserva es el día  ${fecha} de julio a las ${hora}.  Te esperamos 😃')
// }


//Desafio 11
$("#bienvenida").append('<div> <h1 class="bien">Nuestros Servicios nos diferencia</h1> </div>'); 
$(".bien").css({
    "color": "#5a189a",     
    "background-color": "white",
    "opacity": "0.6",
});

ScrollReveal().reveal('.titBien', { delay: 2000 });
ScrollReveal().reveal('.desaf14', { delay: 3000 });
