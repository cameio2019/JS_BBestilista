
window.onload = function () {
    // Items Json
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Shampoo',
            precio: 1000,
            imagen: 'img/Shampoo Silver.jpeg'
        },
        {
            id: 2,
            nombre: 'Mascara',
            precio: 1200,
            imagen: 'img/Mascara Vitaminocolor.jpeg'
        },
        {
            id: 3,
            nombre: 'Ampolla',
            precio: 1500,
            imagen: 'img/Ampolla Powerdose Repair.jpg'
        },
        {
            id: 4,
            nombre: 'Gel',
            precio: 700,
            imagen: 'img/art depolish.jpeg'
        },
        {
            id: 5,
            nombre: 'Mascara',
            precio: 800,
            imagen: 'img/small talk tigi.jpg'
        },
        {
            id: 6,
            nombre: 'Oil',
            precio: 750,
            imagen: 'img/Marula Oil.jpg'
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
            miNodoBoton.classList.add('btn', 'btn-dark', 'align-items-center', 'addContador');
            miNodoBoton.textContent = 'Agregar';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', prodAdd);
            miNodoBoton.setAttribute('onclick', 'agregarAlcarrito();');
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
    * Evento para añadir un producto al carrito de compra
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
    * Vacia el carrito y vuelve a imprimir
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

//Implement. MP API - Sandbox
$(document).ready(function(){
        $("#boton-comprar").click(function(){
        //MP SDK 
        const mp = new MercadoPago('TEST-a18d84ba-5d28-4d88-9053-4a5e61f1c647', {locale: 'es-AR'});
        
        //Web Tokenize Checkout
        mp.checkout({
            tokenizer: {
            totalAmount: 4000,
            backUrl: 'http://127.0.0.1:5500/paymentMethod.html' //el redirect funciona cuando se encuentra en Webserver
            },
            render: {
            container: '#boton-comprar', 

            }
        });
        });
    });
}

const  prodAdd = ()=>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        showCloseButton: true,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: 'success',
        position: 'bottom-end',
        title: 'Producto agregado al carrito!'
    })
}

const deleteProd  = () =>{
    Swal.fire({
        title: 'Vaciar el Carrito?',
        icon: 'warning',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vaciarlo!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Carrito Limpio!',
            'Tu carrito de compras fue borrado.',
            'success'
        )
        }
    })
}

// Funcion Agregar al carrito
function agregarAlcarrito() {
    let init = "0";
    let counter = 0;

    $(".counter").html(init);
    {
        counter++;
        $(".counter").html(counter).animate({
        'opacity' : '0'
        },300, function() {
        $(".counter").delay(300).animate({
            'opacity' : '1'
        })
        })
    }

}
    

