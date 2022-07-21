//Mis importaciones
const NotificacionArticulo = require('../models/notificacionArticulos');


const notificacionesArticulosGet = async(req,res)=>{
    //console.log(uuidv4());
    const notificacionArticulo = await NotificacionArticulo.find();
    res.json({
        notificacionArticulo
    })
}

const notificacionesArticulosPut = async(req,res)=>{
    const {id} = req.params;
    const {...resto} = req.body;

    //Actualizar NotificacionArticuloArticulo
    const notificacionArticulo = await NotificacionArticulo.findByIdAndUpdate(id,resto);

    res.json({
        notificacionArticulo
    })
}

const notificacionesArticulosPost = async(req,res)=>{
    const {nombre,img,precio,cantidad,descripcion,estado} = req.body;
    const notificacionArticulo = new NotificacionArticulo({nombre,img,precio,cantidad,descripcion,estado});
    
    //Guardar en BD
    await notificacionArticulo.save();
    
    res.json({
        notificacionArticulo
    })
}

const notificacionesArticulosDelete = async(req,res)=>{
    const {id} = req.params;
    const {...resto} = req.body;
    resto.estado = false;
    //Eliminar NotificacionArticulo en la app 
    const notificacionArticulo = await NotificacionArticulo.findByIdAndUpdate(id,resto);
    res.json({
        notificacionArticulo
    })
}

module.exports = {
    notificacionesArticulosGet,
    notificacionesArticulosPost,
    notificacionesArticulosPut,
    notificacionesArticulosDelete
}