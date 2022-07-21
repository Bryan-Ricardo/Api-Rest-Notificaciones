//Importaciones extras
const {Router} = require('express');

//Dependencias
const multer = require('multer');


//Mis importaciones
const { notificacionesArticulosGet, notificacionesArticulosPut, notificacionesArticulosPost, notificacionesArticulosDelete } = require('../controllers/notificaciones');


const router = Router();

router.get('/articulos/',notificacionesArticulosGet);

router.put('/articulos/:id',notificacionesArticulosPut);

router.post('/articulos/',notificacionesArticulosPost);

router.delete('/articulos/:id',notificacionesArticulosDelete);

module.exports = router;