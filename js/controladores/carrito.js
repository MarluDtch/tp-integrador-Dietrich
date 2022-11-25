
class CarritoController extends CarritoModel {

    constructor() { 

        super()

        try {
            this.carrito = JSON.parse(localStorage.getItem('carrito')) || []  //saber que hay en el local

        } catch (error) {
            console.error('Algo ocurrio con la lectura del local storage', error)

            this.carrito = [] // se inicializa el carrito vacio
            localStorage.setItem('carrito', this.carrito)  //se crea el local storage
        }
    }

     /*  M E T O D O S */

     elProductoEstaEnElCarrito(producto) {
        return this.carrito.filter(prod => prod.id == producto.id).length
     }

     obtenerProductoDeCarrito(producto) {
        return this.carrito.find(prod => prod.id == producto.id)
     }

     agregarAlCarrito(producto) {
        
        if(!this.elProductoEstaEnElCarrito(producto)){
            console.log('Ya esta en el carrito')
            producto.cantidad = 1
            this.carrito.push(producto)
        }
        else {
            console.log('Producto agregado')
            const productoDeCarrito = this.obtenerProductoDeCarrito(producto)
            productoDeCarrito.cantidad++
        }
        localStorage.setItem('carrito', JSON.stringify(this.carrito))
     }

     async borrarProductoCarrito(id) {

        try {
            const index = this.carrito.findIndex(prod => prod.id == id)
            this.carrito.splice(index, 1)
            localStorage.setItem('carrito', JSON.stringify(this.carrito))

            await renderTablaCarrito(this.carrito)

        } catch (error) {
            console.error(error)
        }
     }

     async enviarCarrito() {

        try {
            const elemSectionCarrito = document.getElementsByClassName('section-carrito') [0]

            elemSectionCarrito.innerHTML = '<h2> Enviando Carrito...</h2>'
            await carritoService.guardarCarritoService(this.carrito)
            this.carrito = []
            localStorage.setItem('carrito', JSON.stringify(this.carrito))

            elemSectionCarrito.innerHTML = '<h2> Enviando Carrito.. <b> OK! </b></h2>'

        } catch (error) {
            console.error(error)
        }
     }

     async mostrarTotal(){
        console.log(this.carrito)
        const mostrar = document.querySelector('#Total')
        console.log(mostrar)
        mostrar.innerHTML = this.carrito.length
     }
}

const CarritoController = new CarritoController()