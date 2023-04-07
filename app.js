let stock = [{id: 1,
    nombre: 'Chocotorta',
    precio: 600},
    {id: 2,
    nombre: 'Lemon Pie',
    precio: 600},
    {id: 3,
    nombre: 'Tarta de Ricota',
    precio: 600},
    {id: 4,
    nombre: 'Pastafrola',
    precio: 600},
    {id: 5,
    nombre: 'Torta Chocolatísima',
    precio: 600},
    {id: 6,
    nombre: 'Café',
    precio: 250},
    {id: 7,
    nombre: 'Té',
    precio: 250},
    {id: 8,
    nombre: 'Chocolatada',
    precio: 250},
]
let carrito=[];

const cartIcon = document.getElementById('cart-icon');

document.addEventListener('DOMContentLoaded', ()=> {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

let precioTotal = document.getElementsByClassName('precioTotal')[0];

const contadorCarrito= document.getElementById('cart-count');

var modalCarrito = document.getElementById("modal-carrito");

let contenidoCarrito = document.getElementById("carrito-contenido");


var abrirCarrito = document.getElementById("btn-openCart");


var span = document.getElementsByClassName("close")[0];


abrirCarrito.onclick = function() {
    modalCarrito.style.display = "block";
}



 

window.onclick = function(event) {
  if (event.target == modalCarrito) {
    modalCarrito.style.display = "none";
  }
}

stock.forEach((producto) => {

    const botonAgregar = document.getElementById(`agregar${producto.id}`)
    botonAgregar.addEventListener('click', ()=>{
        agregarAlCarrito(producto.id)
        
    const item = document.createElement('div');
    item.classList.add('item');

  
    document.body.appendChild(item);

  
    const animation = anime({
        targets: item,
        translateX: cartIcon.offsetLeft - item.offsetLeft, 
        translateY: cartIcon.offsetTop - item.offsetTop, 
        scale: 0.5, 
        duration: 1000, 
        easing: 'easeInOutQuad', 
        complete: () => {
        
        item.remove();

        
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = parseInt(cartCount.textContent) + 1;
        }
    });
        
    })
})

const agregarAlCarrito= (prodId) => {
    const existe = carrito.some (prod=> prod.id === prodId)
    if (existe){
        const prod = carrito.map(prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })

    } else {
    const item = stock.find((prod)=> prod.id === prodId)
    carrito.push(item)
}
    actualizarCarrito()
    console.log(carrito)
    contadorCarrito.innerText = carrito.length
}


let eliminarDelCarrito = (prodId) => {
    let item = carrito.find((prod)  => prod.id === prodId)
    const index = carrito.indexOf(item)
    carrito.splice(index, 1)
    actualizarCarrito()
}

const calcularTotal= function(){
    let total = carrito.reduce((acc, producto)=> acc + producto.precio, 0)
}

let actualizarCarrito = ()=>{
    contenidoCarrito.innerHTML = ``
    carrito.forEach((prod)=> {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>${prod.precio}</p>        
        <button onclick="eliminarDelCarrito(${prod.id})" class="btn-eliminar"><i class="fas fa-trash-alt"></i>
        `
        calcularTotal()
        contenidoCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))
        precioTotal.innerText = "Total: $" + carrito.reduce((acc, prod)=> acc + prod.precio, 0)
    })
}

span.onclick = function() {
    modalCarrito.style.display = "none";
  }