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
                mensaje: 'Mal uso del Endpoint',
                des : 'Este endpoint solo funciona con el verbo POST'
            })
    }
}
//Eliminar empresa
const deleteEmpresa = async (req, res)=>{
    if(req.query.id){
        let result = await Empresa.query();
        //ahora buscamos en el json que responde la db la empresa con el id correspondiente
        let encontrado = result.find(empresas => empresas.id == req.query.id);
        //en caso de que se activo el id por query String
        //Verificamos si estan enviando los datos por queryString
            if(encontrado != undefined){
                //SI ENCONTRADO TIENE UN VALOR DISTTINO A UNDEFINE PUES ELIMNINAMOS LA EMPRESA CON ESE ID
                let delate = await Empresa.query().delete().where('id', '=', encontrado.id);
                if(delate){
                    res.json({mensaje: `La empresa ${req.query.id} ha sido eliminada :D` });
                }else{  res.json({mensaje: `Uy algo salio mal... Seguramente un error en la query de la base de datos` }); }         
            }else{  res.json({mensaje : `La empresa con ID: ${req.query.id} no ha sido encontrada :(`}); }
    }else{

        res.send(`Required query param ID`);
    }
}

//buscar empresas
const search = async (req,res) => {
    let idToSearch = req.query.id;
    if(idToSearch){
        let allEmpresas = await Empresa.query();
        let empresaEncontrada = allEmpresas.find(empresas => empresas.id == req.query.id);
        if(empresaEncontrada){
            res.json(empresaEncontrada);
            console.log("Enviando respuesta, Empresa encontrada")

        }else{
            res.json({mensaje: `Empresa con el id ${idToSearch} no existe`});
            console.log("Enviando respuesta, Empresa no encontrada")
        }
    }
}


const badUse = (req,res) =>{
    res.json({
    mensaje: "Mal uso de esta url. Por favor consulte el archivo README.MD",
    description: "/empresas/add Es solo para enviar datos por post. Los datos a enviar son Rif y descrición de una nueva empresa"});
}
module.exports = {
    listarEmpresas,
    agregarEmpresa,
    badUse,
    search,
    deleteEmpresa
}
