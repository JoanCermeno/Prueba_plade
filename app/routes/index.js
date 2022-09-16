const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');
require('../models/producto')
// Rutaas :D 

router.get('/', controllers.GetInicio);
router.get('/empresas', controllers.listarEmpresas);
router.post('/empresas/add', controllers.agregarEmpresa);
router.get('/empresas/add', controllers.badUse);// Leer Readme.md
router.get('/empresas/search', controllers.search);// Leer Readme.md
router.delete('/empresas' , controllers.deleteEmpresa);//borrar empresa por id
router.get('/productos' , controllers.getProductos);//borrar empresa por id
router.post('/productos' , controllers.agregarProducto);
module.exports = router;
