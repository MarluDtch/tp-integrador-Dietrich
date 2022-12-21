

class CarritoService {
    URL_CARRITO = 'https://6380f50d786e112fe1bf16c6.mockapi.io/carrito' 

    async guardarCarritoServicio(carrito) {
        //                    usa el metodo post declrado en http client
        const carritoGuardado = await htpp.post(this.URL_CARRITO, carrito)
        return carritoGuardado
    }

}

const carritoService = new CarritoService()