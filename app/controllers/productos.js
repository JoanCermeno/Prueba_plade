const Producto = require('../models/producto');
const Categoria = require('../models/categoria');

//consultar productos
const getProductos = async (req,res)=>{
	let allProductos = await Producto.query();
	if(allProductos){
		res.json(allProductos);

	}else{
		res.json({mesnaje: "hubo un error en algo..."});
	}

}
//añadir productos La mas dificil xD
const agregarProducto = async (req,res) =>{
	//insertamos cierta cantidad de productos a una empresa.
	const productToInsert = req.body.
}
module.exports = {
	getProductos
}

