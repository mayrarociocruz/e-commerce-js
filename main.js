const listadoNotas = [5, 7, 3]; //declaracion del array

const auxIndice = 1;

listadoNotas[2]; //3 la posicion 2 en el listado tiene un valor de 3
listadoNotas[0]; //5 se cuenta desde cero 
listadoNotas[auxIndice] //7 la constante me dice que es la posicion 1 y el valor qu hay ahi es 7

let contadorDeNotas = 0;

for(let i = 0; i < 3; i++){
    contadorDeNotas = contadorDeNotas + listadoNotas[i]; // seria la posicion 0, valor 5 
} //esto lo que hace es acumular en cada pasada. seria un sumador de notas

const promedio = contadorDeNotas/3; //la suma total dividido 3
console.log(promedio); //resultado seria 5

if ( promedio > 6){
    console.log ("felicitaciones aprobaste" + promedio);
}
else {
    console.log ("no aprobaste" + promedio);
} // concatenamos con el + promedio y mostramos el mensaje y el valor del promedio



//--------------------------------------------------------------------------------------

//----------------------PRIMER ENTREGA DEL PROYECTO FINAL-------------------------------


//mensaje de bienvenida al usuario
let entrada = prompt("Ingrese su nombre");
let salida = "Bienvenido/a a Cloudsport Jujuy " + entrada ;
alert (salida)






//-------------------DOM---interactuando con html---------------------

//cambio titulo h1

let titulo = document.getElementById('titulo');
titulo.innerHTML= 'CloudSport Jujuy';

//cambio parrafo

let parrafo = document.getElementById('parrafo');
parrafo.innerHTML= 'Tienda Virtual - Envios a toda la provincia';

/*por cuestiones esteticasguardo estos productos por ahora aca

*/ 

const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];

document.getElementById("cart-total").innerHTML = carrito.length;



 //mis productos( agregar mas )
const productos = [
   
    { id:101, articulo: "Calzas Adidas", precio: 9000, imagen:"https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/1/0/10001efv3374001-1.jpg", categoria: "urbanas"},
    { id:102, articulo: "Zapatillas Nike", precio: 34000, imagen:"https://http2.mlstatic.com/D_NQ_NP_980863-MLA41478015972_042020-O.jpg", categoria: "urbanas"},
    { id:103, articulo: "Zapatillas Nike", precio: 4000, imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbe1df35c/products/NI_AV3918-200/NI_AV3918-200-1.JPG", categoria:"urbanas" },
    { id:104, articulo: "Zapatillas Vans", precio: 7800, imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/633/637/products/vn000d5ib8c_11-59654e477e71986c0216248929985208-1024-1024.png", categoria: "zapatillas"},
    { id:105, articulo: "Zapatillas Nike", precio: 24000, imagen: "https://resources.claroshop.com/medios-plazavip/s2/10687/910289/5cbcc7853fb76-150bf846-90bf-4cea-9cea-f76677c08bcb-1600x1600.jpg?scale=340", categoria: "zapatillas"},
    { id:106, articulo: "Zapatillas Reebok Turbo", precio: 12000, imagen: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-reebok-royal-turbo-impuls-mujer-blanca-111010eg9449001-1.jpg", categoria: "zapatillas"},
    ];
    

//CARDS con productos (agregar las categorias)
let cards = document.getElementById("cards");
for (const producto of productos){
    const idButton = `add-cart${producto.id}`
    let contenedorCard = document.createElement("div");
    contenedorCard.innerHTML = 
`<div class="card">
    <p>$${producto.precio}</p>
    <img class="img" src="${producto.imagen}">
    <h4>${producto.articulo}</h4>
    <div class="text-center"><a class="btn btn-outline-dark mt-auto"id='${idButton}'href="#">Agregar</a></div>
    `;
cards.appendChild(contenedorCard);
console.log(contenedorCard);
}
//<a class="boton" id="${idButton}" >Añadir Al Carrito</a></div>
//eventos
productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}` 
    document.getElementById(idButton).addEventListener('click', () => {
        carrito.push(producto);

        document.getElementById("cart-total").innerHTML = `${carrito.length}  - $${total}`;
        localStorage.setItem("totalCarrito", carrito.length);
        const total = carrito.reduce((acc, el) => acc + el.precio, 0);
        alert("Total a pagar: $" + total);
    })
});



/*
//funcion de agregar al carrito
agregarAlCarrito(101);
agregarAlCarrito(102);
agregarAlCarrito(103);

// como elimino un producto del carrito(FUNCIONES DE ORDEN SUPERIOR)
function eliminarDelCarrito(idProducto){
    const index = carrito.findIndex((producto) => producto.id === idProducto);
    carrito.splice(index, 1);//metodo splice elimina uno o varios elementos en cualquier posicion
    console.log(carrito);
}

eliminarDelCarrito(101); //llamado de la funcion "eliminar al carrito"

//total del costo de mi carrito, con el metodo .reduce acumulo cada elemento de mi array 
const totalPrecioCarrito = [ 14000, 4000]
const total = totalPrecioCarrito.reduce((acumulador, elemento) => acumulador + elemento , 0)

console.log (total)
*/
