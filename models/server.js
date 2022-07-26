const express = require('express');
const cors = require('cors');

const {dbConnection} = require('../database/config');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/notificacion'

        //conectar a la base de datos
        this.conectarDB();

        //Midldewers
        this.middlewares();
        
        //Rutas de mi aplicacion
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //Cors
        this.app.use(cors());

        //Parseo y lectura del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath,require('../routes/notificaciones'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
        console.log('Servidor corriendo en puerto' ,this.port);
        })
    }

}

module.exports = Server;