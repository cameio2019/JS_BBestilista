//Desaf 8
class Shop {
    constructor(nombre, precio, tipo, cantidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.disponible = true;
    }
}
console.log(Shop);

var listProd = [];

do{
    var comprueba = prompt("Ingrese nombre del Producto o terminar para salir.");

    if(comprueba === "terminar" ||  comprueba === "Terminar" || comprueba === "TERMINAR"){
        break;
    }else{
        nombreProd = comprueba;
        let precioProd = prompt("Ingrese el precio del Producto");
        let tipoProd = prompt("Ingrese el tipo de Producto");
        let cantProd = prompt("Ingrese la Cantidad de Stock");
        listProd.push(new Shop(nombreProd, precioProd, tipoProd, cantProd));
    }
}
    while(comprueba != "terminar" || comprueba != "Terminar" || comprueba !="TERMINAR");
    console.log(listProd);

    for(let prod of listProd){

        let container = document.createElement("div");

        container.innerHTML = `<h3>Nombre: ${prod.nombre}</h3>
                                <p>Precio: $ ${prod.precio}</p>
                                <p>Tipo:  ${prod.tipo}</p>
                                <p>Stock: ${prod.cantidad}</p> `;

        document.body.appendChild(container);
    }

var noStock = listProd.filter(prod => prod.cantidad == 0 || prod.disponible == false);

console.log(noStock);

document.write("<h3>Lista de Productos sin Stock </h3>");

for(var prod of noStock){
    
    let container = document.createElement("div");

    container.innerHTML = `<h3>Nombre: ${prod.nombre}</h3>
                            <p>Stock: ${prod.cantidad}</p>
                            <p>Tipo: ${prod.tipo}</p>`;
    
    document.body.appendChild(container);
}

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