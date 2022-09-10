const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');
// Rutaas :D 

router.get('/', controllers.GetInicio);
router.get('/empresas', controllers.listarEmpresas);
router.post('/empresas/add', controllers.agregarEmpresa);
router.get('/empresas/add', controllers.badUse);// Leer Readme.md
router.get('/empresas/delate' , controllers.deleteEmpresa);

module.exports = router;
