class Formservicios{
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
corte3.servicios();

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

//Buscar Producto en Shop
const productos =   [{id: 1, producto: "A", precio: 1000},
                    {id: 2, producto: "B", precio: 500},
                    {id: 3, producto: "C", precio: 1500},
                    {id: 4, producto: "D", precio: 700},
];

const ingresoProductoA = productos.find(producto => producto.id === 1);
console.log(ingresoProductoA);

const ingresoProductoB = productos.find(producto => producto.id === 2);
console.log(ingresoProductoB);

const ingresoProductoC = productos.find(producto => producto.id === 3);
console.log(ingresoProductoC);

//Ordenar por precios de Prod en Shop Section
let ordenPrecios = [];
ordenPrecios = productos.map(e => e);
let ordPrecios = productos;
ordenPrecios.sort((p1, p2) => {
    return p1.precio - p2.precio;
});

console.log("Precios ordenados en forma Ascendente");
console.log(ordenPrecios);
