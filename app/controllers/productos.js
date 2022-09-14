const Producto = require('../models/producto');


const getProductos = async (req,res)=>{
	let allProductos = await Producto.query();
	if(allProductos){
		res.json(allProductos);

	}else{
		res.json({mesnaje: "hubo un error en algo..."});
	}

}

module.exports = {
	getProductos
}

