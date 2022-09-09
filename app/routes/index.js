const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');
// Rutaas :D 

router.get('/', controllers.GetInicio);
router.get('/empresas', controllers.listarEmpresas);
router.post('/empresas/add', controllers.agregarEmpresa);

module.exports = router;
