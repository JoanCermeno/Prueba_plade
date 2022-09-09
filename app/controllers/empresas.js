const Empresa = require('../models/empresa');
//Empresas. me devuelve el json con toda la lista de empresas.

//listar todas las empresas
const listarEmpresas = async (req,res) => {
    const empresasRead = await Empresa.query();
    res.json(empresasRead);
}
//insertar una empresa
const agregarEmpresa = async (req,res) => {
    // let result = await Empresa.query().insert({
    //     rif: 'v-544----84-545',
    //     description: 'MultiNacional seguro que responde',
    // });
    if(request.method == 'POST'){

    }else {
        res.json({mensaje : "Esta URL es para añadir una nueva empresa, debes enviar los datos por post"});
    }
   
}

module.exports = {
    listarEmpresas,
    agregarEmpresa
}
