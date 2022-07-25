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
} // concatenamos con el + promedio y mostramos el mensaje y el valor del priomedio



//--------------------------------------------------------------------------------------

//----------------------PRIMER ENTREGA DEL PROYECTO FINAL-------------------------------


//mensaje de bienvenida al usuario
let entrada = prompt("Ingrese su nombre");
let salida = "Bienvenido/a a Cloudsport Jujuy " + entrada ;
alert (salida)


// -----carrito----

const carrito = []; //declaracion de array vacio

function agregarAlCarrito(producto){
    console.log("agregaste al carrito " + producto);
    function tenemosStock(stock){// validacion de stock
        if (stock>0){
            return "Articulo disponible";
        }else{
            return "Articulo sin stock";
        }
    }
    carrito.push(indumentariaDeportiva1);// agregamos el producto al carrito con el .push
    console.log(carrito);
}

//objeto funcion constructora
function IndumentariaDeportiva(codigo, producto, stock, precio){
    this.codigo = codigo;
    this.producto = producto;
    this.stock = stock;
    this.precio = precio;    
}
//parametros de los objetos
const indumentariaDeportiva1 = new IndumentariaDeportiva( 101, "Calzas Adidas", 15, 9000);
const indumentariaDeportiva2 = new IndumentariaDeportiva( 102, "Zapatillas Adidas", 5, 14000);
const indumentariaDeportiva3 = new IndumentariaDeportiva( 103, "Remera Adidas", 3, 4000);
const indumentariaDeportiva4 = new IndumentariaDeportiva( 104, "Zapatillas Topper", 5, 7800);
const indumentariaDeportiva5 = new IndumentariaDeportiva( 105, "Zapatillas Nike", 2, 14000);
const indumentariaDeportiva6 = new IndumentariaDeportiva( 106, "Zapatillas Puma", 2, 12000);

console.log(IndumentariaDeportiva);

// como elimino un producto del carrito
function eliminarDelCarrito(codigo){
    const index = carrito.findIndex((indumentaria) => indumentaria.codigo === codigo);
    carrito.splice(index, 1);//metodo splice elimina uno o varios elementos en cualquier posicion
    console.log(carrito);
}

eliminarDelCarrito(101); //llamado de la funcion "eliminar al carrito"

agregarAlCarrito(indumentariaDeportiva3);// funcion de agregar al carrito
agregarAlCarrito(indumentariaDeportiva2);


//total del costo de mi carrito, con el metodo .reduce acumulo cada elemento de mi array 
const totalPrecioCarrito = [ 14000, 4000]
const total = totalPrecioCarrito.reduce((acumulador, elemento) => acumulador + elemento , 0)

console.log (total)

