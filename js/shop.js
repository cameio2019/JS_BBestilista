// // //Desaf 8
// class Shop {
//     constructor(nombre, precio, tipo, cantidad){
//         this.nombre = nombre;
//         this.precio = parseFloat(precio);
//         this.tipo = tipo;
//         this.cantidad = cantidad;
//         this.disponible = true;
//     }
// }
// console.log(Shop);

// var listProd = [];

// do{
//     var comprueba = prompt("Ingrese nombre del Producto o terminar para salir.");

//     if(comprueba === "terminar" ||  comprueba === "Terminar" || comprueba === "TERMINAR"){
//         break;
//     }else{
//         nombreProd = comprueba;
//         let precioProd = prompt("Ingrese el precio del Producto");
//         let tipoProd = prompt("Ingrese el tipo de Producto");
//         let cantProd = prompt("Ingrese la Cantidad de Stock");
//         listProd.push(new Shop(nombreProd, precioProd, tipoProd, cantProd));
//     }
// }
//     while(comprueba != "terminar" || comprueba != "Terminar" || comprueba !="TERMINAR");
//     console.log(listProd);

//     for(let prod of listProd){

//         let container = document.createElement("div");

//         container.innerHTML = `<h3>Nombre: ${prod.nombre}</h3>
//                                 <p>Precio: $ ${prod.precio}</p>
//                                 <p>Tipo:  ${prod.tipo}</p>
//                                 <p>Stock: ${prod.cantidad}</p> `;

//         document.body.appendChild(container);
//     }

// var noStock = listProd.filter(prod => prod.cantidad == 0 || prod.disponible == false);

// console.log(noStock);

// document.write("<h3>Lista de Productos sin Stock </h3>");

// for(var prod of noStock){
    
//     let container = document.createElement("div");

//     container.innerHTML = `<h3>Nombre: ${prod.nombre}</h3>
//                             <p>Stock: ${prod.cantidad}</p>
//                             <p>Tipo: ${prod.tipo}</p>`;
    
//     document.body.appendChild(container);
// }


//Desaf 9

window.onload = function () {
    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Shampoo',
            precio: 1000,
            imagen: '../img/Shampoo Silver.jpeg'
        },
        {
            id: 2,
            nombre: 'Mascara',
            precio: 1200,
            imagen: '../img/Mascara Vitaminocolor.jpeg'
        },
        {
            id: 3,
            nombre: 'Ampolla',
            precio: 1500,
            imagen: '../img/Ampolla Powerdose Repair.jpg'
        },
        {
            id: 4,
            nombre: 'Gel',
            precio: 700,
            imagen: '../img/art depolish.jpeg'
        },
        {
            id: 5,
            nombre: 'Mascara',
            precio: 800,
            imagen: '../img/small talk tigi.jpg'
        },
        {
            id: 6,
            nombre: 'Oil',
            precio: 750,
            imagen: '../img/Marula Oil.jpg'
        }

    ];

    let carrito = [];
    let total = 0;
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    // Funciones
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = info.precio + '$';
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-dark', 'align-items-center');
            miNodoBoton.textContent = 'Agregar';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Agregar
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    /**
    * Evento para añadir un producto al carrito de la compra
    */
    function anyadirProductoAlCarrito(evento) {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Actualizamos el carrito 
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();
    }

    /**
    * Imprime todos los productos guardados en el carrito
    */
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los dupes
        const carritoSinDuplicados = [...new Set(carrito)];
        
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => { 
                return itemBaseDatos.id === parseInt(item);
            });
            
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}$`;
            // Boton Borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
        
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
    }

    /**
    * Evento para borrar un elemento del carrito
    */
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Calculo del nuevo precio
        calcularTotal();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();

    }

    /**
    * Calcula el precio total teniendo en cuenta los productos repetidos
    */
    function calcularTotal() {
        
        total = 0;
        
        carrito.forEach((item) => {
            
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            total = total + miItem[0].precio;
        });
        
        DOMtotal.textContent = total.toFixed(2);
    }

    /**
    * Varia el carrito y vuelve a imprimir
    */
    function vaciarCarrito() {
        carrito = [];

        renderizarCarrito();
        calcularTotal();

        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {

        if (miLocalStorage.getItem('carrito') !== null) {

            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    calcularTotal();
    renderizarCarrito();
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