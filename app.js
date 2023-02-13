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
let carrito=[]
let subtotal = []
const contadorCarrito= document.getElementById('contadorCarrito')

stock.forEach((producto) => {

    const botonAgregar = document.getElementById(`agregar${producto.id}`)
    botonAgregar.addEventListener('click', ()=>{
        agregarAlCarrito(producto.id)
        
    })
})

const agregarAlCarrito= (prodId) => {
    const item = stock.find((prod)=> prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
    contadorCarrito.innerText = carrito.length
    calcularTotal()
}

const calcularTotal= function(){
    let total = carrito.reduce((acc, producto)=> acc + producto.precio, 0)
    console.log(`Su total es ${total}`)
}