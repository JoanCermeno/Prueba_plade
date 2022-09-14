const GetInicio = (req,res) => {
    res.json({
        "mensaje" : "Tengo la siguientes rutas",
    });
}
//Incluyendo todos los ficheros con los controladores de la api
const { listarEmpresas } = require('./empresas');
const { agregarEmpresa } = require('./empresas');
const { badUse } = require('./empresas');
const { deleteEmpresa } = require('./empresas');
const { search } = require('./empresas');
const { getProductos } = require('./productos');
//console.log(listarEmpresas);
module.exports = {GetInicio,
    listarEmpresas,
    agregarEmpresa,
    search,
    deleteEmpresa,
    badUse,
    getProductos
};
