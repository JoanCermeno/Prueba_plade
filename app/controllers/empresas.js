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
    if(req.method == 'POST'){
        //revisamos si nos estan llegadno las variables corresponidentes
        let desciption_empresa = req.body.desciption || '';
        let rif_empresa = req.body.rif || '';
        if(desciption_empresa == '' || rif_empresa  == ''){
            res.json({mensaje: `Error! no estas enviando datos de la empresa a añadir`});        
        }else{
            //ahora si agregamos a la base de datos esos valores
            let result = await Empresa.query().insert({
                rif: `${rif_empresa}`,
                description : `${desciption_empresa}`
            });
            console.log(result);
            res.json({
                mensaje: 'TOodo ok!',
                des : 'La empresa ha sido insertada correctamente'
            })
        }
    }else{
        res.json({
                mensaje: 'Mal uso del Endpint',
                des : 'Este endpint solo funciona con el verbo POST'
            })
    }
}

module.exports = {
    listarEmpresas,
    agregarEmpresa
}
