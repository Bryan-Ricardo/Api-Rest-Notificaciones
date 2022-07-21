const {Schema,model} = require('mongoose');

const NotificacionArticulosSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio'],
        unique:true
    },
    img:{
        type: String,
        default: "Sin imagen"
    },
    precio:{
        type: Number,
        required:[true,'El precio es obligatorio'],
    },
    cantidad:{
        type: Number,
        required:[true,'La cantidad es obligatoria'],
    },
    descripcion:{
        type: String,
        default: "Sin descripcion"
    },
    estado:{
        type:Boolean,
        default: true
    }
})

module.exports = model('NotificacionArticulos',NotificacionArticulosSchema);