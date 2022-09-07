//--------------------------USO DE LIBRERIAS--------------------------------------------
Swal.fire({
    title: 'BIENVENIDO/A A CLOUDSPORT JUJUY',
    width: 400,
    padding: '3em',
    color: '#12a0bc3b;',
    background: '#fff',
    backdrop: `
        #12a0bc34
        left top
        no-repeat
    `
})

//-------------------DOM---interactuando con html---------------------

//cambio titulo h1
let titulo = document.getElementById('titulo');
titulo.innerHTML= 'CLOUDSPORT JUJUY';

//cambio parrafo
let parrafo = document.getElementById('parrafo');
parrafo.innerHTML= 'Tienda Virtual';

//CARDS CON PRODUCTOS
const cards = document.getElementById('new-cards');

//MODAL
const contenedorCarrito = document.getElementById('carrito-contenedor'); 

//BOTON VACIAR CARRITO
const botonVaciar = document.getElementById('vaciar-carrito');

//REFLEJAR LA CANTIDAD TOTAL DE PRODUCTOS EN EL BOTON DEL CARRITO
const contadorCarrito = document.getElementById("cart-total");

//SUMAR EL TOTAL EN EL MODAL DEL CARRITO
const precioTotal = document.getElementById('total-compra');

//CARRITO
let carrito = [];

document.addEventListener('DOMContentLoaded', () =>{
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito();
    }
})

//ARRAY DE LOS PRODUCTOS
let productosTotal = [];

//---------------------------VACIAR CARRITO BOTON-------------------------------------
botonVaciar.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarrito();
})
//-------------LOGICA PARA TRAER A LOS PRODUCTOS DEL JSON USANDO FETCH--------------------
    fetch('productos.json')
        .then((response) => response.json())
        .then((productos) => {

        //POR CADA UNO DE ESOS PRODUCTOS GENERO UNAS CARDS 
        productos.forEach((producto) => {
            productosTotal.push({id:`${producto.id}`, cantidad:`${producto.cantidad}`, articulo:`${producto.articulo}`, precio:`${producto.precio}`, imagen: `${producto.imagen}`, categoria: `${producto.categoria}`});
            let contenedorCard = document.createElement("div");
            contenedorCard.innerHTML = `
            <div class="card">
            <img class="img" src="${producto.imagen}">
            <h4>${producto.articulo}</h4>
            <p>$${producto.precio}</p>
            <button id="agregar${producto.id}" class="boton-agregar">Agregar al carrito</button>
            </div>
            `
            //SE REFLEJAN EN EL HTML
            cards.appendChild(contenedorCard);

            //PARA QUE EJECUTE LA FUNCION DE AGREGAR AL CARRITO
            const boton = document.getElementById(`agregar${producto.id}`)
            boton.addEventListener('click' , () => {
            agregarAlCarrito(producto.id)

            //USO DE LIBRERIAS
            Swal.fire({ 
                position: 'top-end',
                icon: 'success',
                title: 'Se agrego al carrito ' + producto.articulo,
                showConfirmButton: false,
                timer: 1500
            })
            })
        })
    })
    
//--------------------------AGREGAR AL CARRITO---------------------------------------   

const agregarAlCarrito = (prodId) => {
    //CAMBIAR LA CANTIDAR DE UN MISMO ARTICULO EN EL CARRITO
    const existe = carrito.some (prod => prod.id == prodId)
    if (existe){
        const prod = carrito.map(prod => {
            if(prod.id == prodId){
                prod.cantidad++
            }
        })
    } else{
    const item = productosTotal.find((prod) => prod.id == prodId)
    carrito.push(item);
    console.log(carrito)
    }

    actualizarCarrito();
    
}

//--------------------------ELIMINAR DEL CARRITO--------------------------------------

const eliminarDelCarrito = (prodId) => {

    //ELIMINO LOS PRODUCTOS QUE YA ESTAN EN EL CARRITO (PROD)
    const item = carrito.find((prod) => prod.id == prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
}

//------------------INSERTAR PRODUCTOS EN EL CARRITO - MODAL----------------------

const actualizarCarrito = () => {

//PARA QUE NO SE ACUMULEN LOS PRODUCTOS
contenedorCarrito.innerHTML = ""

    
        carrito.forEach((prod) => {
            const div = document.createElement('div')
            div.innerHTML = `
            <img src="${prod.imagen}" style="width:50px">
            <h4 class="titulo-modal">${prod.articulo}</h4>
            <p>$${prod.precio}</p>
            <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
            <button type="button" class="eliminar" onclick="eliminarDelCarrito()">Eliminar</button><hr>
            `
    //CREO UN DIV POR CADA PRODUCTO Y CON EL APPEND APARECEN EN EL CARRITO    
    contenedorCarrito.appendChild(div)

    //PARA NO PERDER LA CANTIDAD AL ACTUALIZAR
    localStorage.setItem('carrito', JSON.stringify(carrito));
})
contadorCarrito.innerText= carrito.length;
console.log(contadorCarrito);
precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
}

//------------------------------FILTRANDO PRODUCTOS POR CATEGORIA-----------------------------------


function filtrarCategoria(categoria){
    document.getElementById("new-cards").innerHTML = " "; //para que no se acumulen limpio el html
    const filtrados = productosTotal.filter((prod) => prod.categoria == categoria);

    filtrados.forEach((prod) => {
        const boton = `add-cart${prod.id}` 
    document.getElementById("new-cards").innerHTML+= 
        `<div class="card">
            <img class="img" src="${prod.imagen}">
            <h4>${prod.articulo}</h4>
            <p>$${prod.precio}</p>
            <button id="agregar${prod.id}" class="boton-agregar">Agregar al carrito</button>
            </div>
        `;
         console.log(filtrados)       
    })
}
