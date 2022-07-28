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


// -----carrito----



//-------------------DOM---interactuando con html---------------------

//cambio titulo h1

let titulo = document.getElementById('titulo');
titulo.innerHTML= 'CloudSport Jujuy';

//cambio parrafo

let parrafo = document.getElementById('parrafo');
parrafo.innerHTML= 'Tienda Virtual - Envios a toda la provincia';

/*objeto funcion constructora
function IndumentariaDeportiva(codigo, producto, stock, precio){
    this.codigo = codigo;
    this.producto = producto;
    this.stock = stock;
    this.precio = precio;    
}
por cuestiones esteticasguardo estos productos por ahora aca
{ id:104, producto: "Zapatillas Topper", stock: 5, precio: 7800},
    { id:105, producto: "Zapatillas Nike", stock: 2, precio: 24000},
    { id:106, producto: "Zapatillas Puma", stock: 2, precio: 12000},
*/ 
//movi aca el array por que no aparecian las card, no se por que pero de tanto tocar funciono asi
const productos = [
    { id:101, producto: "Calzas Adidas", stock: 15, precio: 9000},
    { id:102, producto: "Zapatillas Adidas", stock: 5, precio: 14000},
    { id:103, producto: "Remera Adidas", stock: 3, precio: 4000},
    ];
    

//card con productos

let cards = document.getElementById('card');
for (const producto of productos){
    let contenedorCard= document.createElement("div");
    contenedorCard.innerHTML=`
    <h2> ${producto.producto}</h2>
    <p> ${producto.precio}</p>
    <button> Agregar al carrito</button>`;
    cards.appendChild(contenedorCard);
}


const carrito = []; //declaracion de array vacio

function agregarAlCarrito(producto){
    console.log("agregaste al carrito " + producto);
    carrito.push(103);// agregamos el producto al carrito con el .push
    console.log(carrito);
}




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
