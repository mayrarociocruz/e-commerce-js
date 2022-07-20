const listadoNotas = [5, 7, 3];

const auxIndice = 1;

listadoNotas[2]; //3 la posicion 2 en el listado tiene un valor de 3
listadoNotas[0]; //5 se cuenta desde cero 
listadoNotas[auxIndice] //7 la constante me diucde que es la posicion 1 y el valor qu hay ahi es 7

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
} // concatenamos con el + promedio y mostramos el mensaje y el valor del priomedio



// Desafio: incorporar arrays 


const carritoDeCompras =[]

function agregarAlCarrito(producto){

    carritoDeCompras.push(producto)
    console.log(carritoDeCompras)
}

agregarAlCarrito({id: 1, nombre: "Calzas Adidas", precio: 9000})
agregarAlCarrito({id: 2, nombre: "Zapatillas Adidas", precio: 14000})
agregarAlCarrito({id: 3, nombre: "Remera Adidas", precio: 4000})
agregarAlCarrito({id: 4, nombre: "Zapatillas Topper", precio: 7800})
agregarAlCarrito({id: 5, nombre: "Zapatillas Fila", precio: 7500})
agregarAlCarrito({id: 6, nombre: "Zapatillas Nike", precio: 14000})
agregarAlCarrito({id: 7, nombre: "Zapatillas Puma", precio: 12000}) 
agregarAlCarrito({id: 8, nombre: "Zapatillas New Balance", precio: 13000})


function quitarProductoDelCarrito(idDelProducto){
    const index = carritoDeCompras.findIndex((producto) => producto.id === idDelProducto);
    carritoDeCompras.splice(index, 1);
    console.log(carritoDeCompras);
}

quitarProductoDelCarrito(1);
quitarProductoDelCarrito(8);