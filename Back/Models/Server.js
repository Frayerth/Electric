const express = require('express')
const cors = require('cors')

class Server{
    constructor (){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        //middlewares()
        this.middlewares()
        
        //rutas de la app
        this.routes()

        this.listen()
    }

    middlewares(){
        //CORS
        this.app.use(cors())

        //Lectura y parseo
        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.usuariosPath, require('../Routes/Usuarios'))
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log("Servidor conectado")
        })
    }
}

module.exports = Server