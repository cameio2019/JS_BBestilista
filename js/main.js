/* class Formservicios{
        constructor(corte, color, keratina) {
        this.corte = corte;
        this.color = color;
        this.keratina = keratina;
    }
    servicios(){
        console.log("Elegiste " + (this.corte) + " que tiene promocion e incluye " + (this.color) + " o " +(this.keratina));
    }
}     
let corte2 = new Formservicios("carre", "rojo", "keratina");
corte2.servicios();
let corte3 = new Formservicios("alisado", "verde", "keratina");
corte3.servicios(); */

async function solicitar(){
    /* let noMbre = prompt ("Ingresa tu nombre:");
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
    } */
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

//Desafio 6
//Buscar y encontrar servicios
const servicios =   [{id: 1, servicio: "Corte", precio: 1000},
                    {id: 2, servicio: "Color", precio: 500},
                    {id: 3, servicio: "Peinado", precio: 1500},
                    {id: 4, servicio: "Alisado", precio: 700},

];

const buscarCorte = servicios.find(servicio => servicio.id === 1);
console.log(buscarCorte);

const buscarColor = servicios.find(servicio => servicio.id === 2);
console.log(buscarColor);

const buscarPeinado = servicios.find(servicio => servicio.id === 3);
console.log(buscarPeinado);

const buscarAlisado = servicios.find(servicio => servicio.id === 4);
console.log(buscarAlisado);

//Filtar Peluquero
const peluqueros = [{id: 1, peluquero: "Bruno"},
                    {id: 2, peluquero: "Pepe"},
                    {id: 3, peluquero: "Juan"},
];

const filtrarPeluquero1 = peluqueros.filter(peluquero => peluquero.id === 1);
console.log(filtrarPeluquero1);

const filtrarPeluquero2 = peluqueros.filter(peluquero => peluquero.id === 2);
console.log(filtrarPeluquero2);

const filtrarPeluquero3 = peluqueros.filter(peluquero => peluquero.id === 3);
console.log(filtrarPeluquero3);
//Desafio 6

//Desafio Complementario - Ordenar array de obj
peluqueros.sort((i1, i2) => {
    if (i1.peluquero < i2.peluquero) {
        return 1;
        } else if (i1.peluquero > i2.peluquero) {
            return -1;
        } else {
            return 0;
        }
}); 

console.log(peluqueros);



