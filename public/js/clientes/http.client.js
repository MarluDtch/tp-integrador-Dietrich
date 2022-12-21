// conversion de funciones a metodos

class Http {

     /* Metodo GET */

     async get (url, id){
        try {
            const respuesta = await fetch (url + (id || ''), {
                method:'get'
            })

            const resultado = await respuesta.json()
            return resultado

        } catch (error) {
            console.error('ERROR GET', error)
        }
     }

     /* Metodo POST */

     async post (url, dato){
        try {
            const respuesta = await fetch(url, {
                method: 'post',
                body: JSON.stringify(dato),
                headers: {'content-type': 'application/json'}
            })

            const resultado = await respuesta.json()
            return resultado 

        } catch (error) {
            console.error('ERROR POST', error)
        }
     }

    /* Metodo PUT */

    async put (url, id, dato) {
        try {
            const respuesta = await fetch (url + id, {
                method: 'put',
                body: JSON.stringify(dato),
                headers: { 'content-type' : 'application/json'}
            })

            const resultado = await respuesta.json()
            return resultado

        } catch (error) {
            console.error('ERROR PUT', error)
        }
    }

    /* Metodo DELETE */

    async del (url, id) {
        try {
            const respuesta = await fetch(url + id, {
                method: 'delete'
            })

            const resultado = await respuesta.json()
            return resultado

        } catch (error) {
            console.error('ERROR DELETE', error)
        }
    }
}

const http = new Http()