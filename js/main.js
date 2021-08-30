
async function solicitar(){

    const { value: formDatos } = await Swal.fire({
        title: 'Ingresa tus Datos',
        html:
            '<input id="swal-nombre" class="swal2-input" placeholder="Ingrese su Nombre">' +
            '<input id="swal-apellido" class="swal2-input" placeholder="Ingrese su Apellido">',
        focusConfirm: false,
        preConfirm: () => {
            return [
            document.getElementById('swal-nombre').value,
            document.getElementById('swal-apellido').value
        ]
        }
    })
    
    if (formDatos) {
        Swal.fire(JSON.stringify(formDatos))
    }

//     let flatpickrInstance

// Swal.fire({
//     title: 'Por favor elige la fecha',
//     html: '<input class="swal2-input" id="expiry-date">',
//     stopKeydownPropagation: false,
//     preConfirm: () => {
//     if (flatpickrInstance.selectedDates[0] < new Date()) {
//         Swal.showValidationMessage(`Seleccione una fecha correcta`)
//     }
// },
//     willOpen: () => {
//     flatpickrInstance = flatpickr(
//         Swal.getPopup().querySelector('#expiry-date')
//     )
//     }
// }) 

    const { value: fecha } = await Swal.fire({
        title: 'Julio',
        input: 'select',
        inputOptions: {
        'Dia': {
            1: '1',
            2: '2',
            3: '3',
            4: '4',            
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            13: '13',
            14: '14',
            15: '15',            
            16: '16',
            17: '17',
            18: '18',
            19: '19',
            20: '20',
            21: '21',
            22: '22',
            23: '23',
            24: '24',
            25: '25',
            26: '26',            
            27: '27',
            28: '28',
            29: '29',
            30: '30',
            31: '31'
            },
        },
        inputPlaceholder: 'Fechas Disponibles',
        showCancelButton: true,
/*         inputValidator: (value) => {
            return new Promise((resolve) => {
            if (value === 'oranges') {
                resolve()
            } else {
                resolve('You need to select oranges :)')
            }
            })
        } */
        })

        const { value: hora } = await Swal.fire({
            title: 'Horario Disponible',
            input: 'select',
            inputOptions: {
            'Hora': {
                9: '09:00',
                10: '10:00',
                11: '11:00',
                12: '12:00',
                13: '13:00',
                14: '14:00',
                15: '15:00',            
                16: '16:00',
                17: '17:00',
                18: '18:00',
                19: '19:00',
                20: '20:00',
                21: '21:00',
                22: '22:00',
                23: '23:00',
                24: '24:00'
                },
            },
            inputPlaceholder: 'Horas Disponibles',
            showCancelButton: true,
    /*         inputValidator: (value) => {
                return new Promise((resolve) => {
                if (value === 'oranges') {
                    resolve()
                } else {
                    resolve('You need to select oranges :)')
                }
                })
            } */
            })
        
        if (fecha) {
        Swal.fire(`Tu Reserva es el día  ${fecha} de julio a las ${hora}.  Te esperamos 😃`)
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

function tiposCortes(){

    do{
        let corte = prompt("Ingresa Tipo de Corte:");
        let precio = parseInt(prompt("Ingrese Precio: "));
        let iva = 0.21;
        let precioDescuento;
        console.log(corte);
        console.log(precio);
        
    if (corte != "" && precio != "") {
        if (precio >= 3000) {
            precioDescuento = precio - (precio * 0.10);
            let total = precioDescuento + incluirImpuesto(precio, iva);
            console.log(precioDescuento);
            alert("El Total es: " + "$" +total);
        } else if (precio >= 4000) {
            precioDescuento = precio - (precio * 0.15);
            let total = precioDescuento + incluirImpuesto(precio, iva);
            console.log(precioDescuento);
            alert("El Total es: " + "$" +total);   
        }  else{
            let total = precio + incluirImpuesto(precio, iva);
            alert("No existe descuento para este corte.");
            alert("El Total es: " + "$" + total);
            }
        
        } else {
            tiposCortes();
        }
        
        otroMas = confirm("Te gustaria otro corte?");
        }while (otroMas);  

        function incluirImpuesto(precio, iva) {
            return precio * iva;
        }
} 

// //Desafio 6
// //Buscar y encontrar servicios
// const servicios =   [{id: 1, servicio: "Corte", precio: 1000},
//                     {id: 2, servicio: "Color", precio: 500},
//                     {id: 3, servicio: "Peinado", precio: 1500},
//                     {id: 4, servicio: "Alisado", precio: 700},

// ];

// const buscarCorte = servicios.find(servicio => servicio.id === 1);
// console.log(buscarCorte);

// const buscarColor = servicios.find(servicio => servicio.id === 2);
// console.log(buscarColor);

// const buscarPeinado = servicios.find(servicio => servicio.id === 3);
// console.log(buscarPeinado);

// const buscarAlisado = servicios.find(servicio => servicio.id === 4);
// console.log(buscarAlisado);

//Filtar Peluquero
// const peluqueros = [{id: 1, peluquero: "Bruno"},
//                     {id: 2, peluquero: "Pepe"},
//                     {id: 3, peluquero: "Juan"},
// ];

// const filtrarPeluquero1 = peluqueros.filter(peluquero => peluquero.id === 1);
// console.log(filtrarPeluquero1);

// const filtrarPeluquero2 = peluqueros.filter(peluquero => peluquero.id === 2);
// console.log(filtrarPeluquero2);

// const filtrarPeluquero3 = peluqueros.filter(peluquero => peluquero.id === 3);
// console.log(filtrarPeluquero3);
// //Desafio 6

// //Desafio Complementario - Ordenar array de obj
// peluqueros.sort((i1, i2) => {
//     if (i1.peluquero < i2.peluquero) {
//         return 1;
//         } else if (i1.peluquero > i2.peluquero) {
//             return -1;
//         } else {
//             return 0;
//         }
// }); 

// console.log(peluqueros);

//Desafio 11
$("#bienvenida").append('<div> <h1 class="bien">Nuestros Servicios nos diferencia</h1> </div>'); 
$(".bien").css({
    "color": "#5a189a",     
    "background-color": "white",
    "opacity": "0.6",
});

// Desafio 12/13
//Array de objetos
const servicios = [{ id: 1,  nombre: "Corte", precio: 1250 },
{  id: 2,  nombre: "Color", precio: 700},
{  id: 3,  nombre: "Peinado"  , precio: 500},
{  id: 4,  nombre: "Alisado" , precio: 1000}];
// Asociamos el evento click en ready luego del DOM Generado
$(document).ready(function () {
    $(".btnComprar").click(function (e) {
        let hijos = $(e.target).parent().children();
        console.log(hijos[1].value);
        $(e.target).parent().toggle("slow");

    });
});

for (const servicio of servicios) {
    $("#servicios").append(`
                        <div class="card ms-5" style="width: 18rem;">
                            <img src="../img/pelu3.jpeg" class="card-img-top mt-2" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Corte</h5>
                                <input class="text-dark" value="${servicio.id}" type="hidden">
                                <h4 class="text-dark">  Servicio: ${servicio.nombre}</h4>
                                <b> $ ${servicio.precio}</b>
                                <br>
                                <button type="button" class="btn btn-success btnComprar mt-3">Contratar</button>
                            </div>
                        </div>
`);
}

ScrollReveal().reveal('.titBien', { delay: 2000 });
ScrollReveal().reveal('.desaf14', { delay: 3000 });
