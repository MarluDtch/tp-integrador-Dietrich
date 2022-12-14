

async function renderPlantillaListado(listado) {

    try {
        
        const respuesta = await fetch('plantillas/inicio.hbs')
        const plantillaHbs = await respuesta.text()
        const template = Handlebars.compile(plantillaHbs)

        const html = template({ listado })
    
        document.getElementsByClassName('cards-container')[0].innerHTML = html

    } catch (error) {
        console.error(error)
    }
}

function agregarCarrito() { 

}

async function initInicio() {
    console.warn('initInicio()')

    const productos = await productoController.obtenerProductos()

    await renderPlantillaListado(productos)

    document.querySelector('.section-cards__header p').innerHTML = `Se encontraron ${productos.length} productos`
}