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

//carrito, local storage y json
const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];//?? reemplazaria a un if pregunta si es null o undefined

//la logica que suma todos los precios de los productos que estan en el carrito
const total = carrito.reduce((acc, productos) => acc + productos.precio, 0);

//este total lo escribimos en el html 
document.getElementById("cart-total").innerHTML = `${carrito.length}  - $${total}`;

//----MODAL CARRITO

function verCarrito() {
    document.getElementById("modal-bodys").innerHTML = " "
    carrito.forEach((producto) => {
        document.getElementById("modal-bodys").innerHTML += `
        <img src="${producto.imagen}" style="width:50px">
        <h4>${producto.articulo}</h4>
        <p>$${producto.precio}</p>
        `
       
    })
   
}


 //mis productos( agregar mas)
const productos = [
   
    { id:101, articulo: "Zapatillas Adidas Originals Superstar", precio: 23000, imagen:"https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/1/0/10001efv3374001-1.jpg", categoria: "urbanas"},
    { id:102, articulo: "Zapatillas Nike Air Force 1 07 Lv8 Nba", precio: 36000, imagen:"https://cdn.flightclub.com/TEMPLATE/156034/1.jpg", categoria: "urbanas"},
    { id:103, articulo: "Jordan 1 Retro Low Slip Desert Ore Light Cream", precio: 40000, imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbe1df35c/products/NI_AV3918-200/NI_AV3918-200-1.JPG", categoria:"urbanas" },
    { id:104, articulo: "Zapatillas Vans Old Skool Hi -Sk8-Hi", precio: 23800, imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/245/791/products/e36b6f29-14e3-4798-874f-704706acde6e-7dd65cc9febc5d5d2c16516268559860-1024-1024.jpg", categoria: "urbanas"},
    { id:105, articulo: "Zapatillas Nike Air Max Sasha", precio: 17000, imagen: "https://www.thenextsole.com/storage/images/916783-004.png", categoria: "zapatillas"},
    { id:106, articulo: "Reebok Royal Turbo Impulse", precio: 21000, imagen: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-reebok-royal-turbo-impuls-mujer-blanca-111010eg9449001-1.jpg", categoria: "zapatillas"},
    { id:107, articulo: "Zapatillas Nike Running Nike Renew Rival", precio: 17900, imagen:"https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw2664173d/products/NI_BV0799-300/NI_BV0799-300-1.JPG", categoria: "zapatillas"},
    { id:108, articulo:"Zapatilla Puma Vikky Staked Stud Negro/tachas", precio: 17000, imagen:"https://http2.mlstatic.com/D_NQ_NP_907709-MLA31024512629_062019-O.jpg", categoria: "urbanas"},
    { id:109, articulo:"Zapatillas Puma basket mujer platform trace", precio: 17000, imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRn7ln1C7ViP27gU373VG5MQ1btR3ENenhw&usqp=CAU", categoria: "urbanas"},
    { id:110 , articulo:"Zapatillas Puma Nrgy Rupture" , precio: 12600 , imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMPZzx85eL76BxwZCA6JGSNpljgCSSn-_4Q&usqp=CAU", categoria: "zapatillas"},
    { id:111, articulo:"Zapatillas Nike Ebernon Mid Negras" , precio: 31000, imagen:"https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/5/1/510010aq1773002-1.jpg", categoria: "urbanas" },
    { id:112, articulo:"Camiseta Titular Argentina 22 Adidas" , precio: 17000, imagen:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/611f58bb7b4444bbb62eaeca012c57dd_9366/Camiseta_Titular_Argentina_22_Blanco_HF1495_01_laydown.jpg", categoria: "nuevo" },
    { id:113, articulo:"Botines Adidas X SPEEDPORTAL.1 FG VERDE" , precio: 62999, imagen:"https://assets.adidas.com/images/w_600,f_auto,q_auto/0104cd8e08ce4ded9d22ae9b010ec3a3_9366/X_SPEEDPORTAL.1_FG_Verde_GW8426_22_model.jpg", categoria:"nuevo" },
    { id:114, articulo: "Zapatillas Adidas Originals Superstar Rich Mnisi Ot Tech Mujer", precio: 38.000, imagen:"https://newsport.vteximg.com.br/arquivos/ids/13852204-1000-1000/GW0523-A.jpg?v=637921939524600000", categoria:"nuevo" },
    { id:115 , articulo: "Zapatillas Adidas ZX Wavian X RICH MNISI Blanca" , precio: 38999, imagen:"https://newsport.vteximg.com.br/arquivos/ids/14033352-1000-1000/GW0517-A.jpg?v=637940157908370000", categoria: "nuevo"},
   // { id: , articulo: , precio: , imagen:"", categoria: },
   // { id: , articulo: , precio: , imagen:"", categoria: },
   // { id: , articulo: , precio: , imagen:"", categoria: },
   // { id: , articulo: , precio: , imagen:"", categoria: },
    ];

//---------OPERADORES AVANZADOS:DESESTRUCTURACION Y SPREAD DEL ARRAY-------------------

const [,, a, b] = productos //desestructuracion las comillas simbolizarian los id 101 y 102
console.log(a)//me trae el producto con el id 103
console.log(b)// me trae el producto con el id 104
console.log(...productos)// spread


//-----------CARDS con productos (agregar las categorias)
let cards = document.getElementById("cards");
for (const producto of productos){
    const idButton = `add-cart${producto.id}`
    let contenedorCard = document.createElement("div");
    contenedorCard.innerHTML = 
`<div class="card">
    <img class="img" src="${producto.imagen}">
    <h4>${producto.articulo}</h4>
    <p>$${producto.precio}</p>
    <div class="carrito"><a class="btn btn-outline-dark mt-auto"id='${idButton}'href="#">Agregar al carrito</a></div>
    `;
cards.appendChild(contenedorCard);
console.log(contenedorCard);

}
//------------------FILTRANDO PRODUCTOS POR CATEGORIA--------------

function filtrarCategoria(categoria){
    document.getElementById("cards").innerHTML = " "; //para que no se acumulen limpio el html
    const filtrados = productos.filter((producto) => producto.categoria == categoria);

    filtrados.forEach((producto) => {
        const idButton = `add-cart${producto.id}` 
    document.getElementById("cards").innerHTML+= 
        `<div class="card">
        <img class="img" src="${producto.imagen}">
        <h4>${producto.articulo}</h4>
        <p>$${producto.precio}</p>
        <div class="carrito"><a class="btn btn-outline-dark mt-auto"id='${idButton}'href="#">Agregar al carrito</a></div>
        `;
                
    })
}
    


//-------------------EVENTOS---------------------------------------
productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}` 
    document.getElementById(idButton).addEventListener('click', () => { //podria cambiarlo por el .onclick = ()=>{
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        const total = carrito.reduce((acc, el) => acc + el.precio, 0);
        document.getElementById("cart-total").innerHTML = `${carrito.length}  - $${total}`;
        //-----------MODAL con los articulos agregados al carrito--------------------------
        document.getElementById("modal-bodys").innerHTML = ""
        carrito.forEach((producto) => {
            document.getElementById("modal-bodys").innerHTML += `
            <img src="${producto.imagen}" style="width:50px">
            <h4>${producto.articulo}</h4>
            <p>$${producto.precio}</p>
            <button type="button"><img class="tacho" src="https://cdn-icons-png.flaticon.com/512/40/40002.png" style="width:30px"></button>
            `
        })

        console.log(carrito)
        Swal.fire({ //--------------USO DE LIBRERIAS------------
            position: 'top-end',
            icon: 'success',
            title: 'Se agrego al carrito ' + producto.articulo,
            showConfirmButton: false,
            timer: 1500
          })
         
        //-----------OPERADORES AVANZADOS: OPERADORES TERNARIOS------------------------------
        let categoria //seria una simplificacion del if y el else en una sola linea de codigo
        categoria==productos.urbanas ? console.log("zapatillas urbanas") : console.log("zapatillas deportivas")
        //localStorage.setItem('carrito', JSON.stringify(carrito));

        
        //localStorage.setItem("totalCarrito", carrito.length);
       
    
        //document.getElementById("card-compra").innerHTML = "";
        console.log("cart-total");
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
