const Producto = require('../models/producto');
const Empresa = require('../models/empresa');
//consultar productos
const getProductos = async (req, res) => {
	let allProductos = await Producto.query();
	if (allProductos) {
		res.json(allProductos);

	} else {
		res.json({
			mesnaje: "hubo un error en algo..."
		});
	}

}
//añadir productos La mas dificil xD
const agregarProducto = async (req, res) => {
	//Capuramos los datos provenientes del body. es decir por post
	let nombre = req.body.nombre || '';
	let precio = req.body.precio || '';
	let existencia = req.body.existencia || '';
	let id_categoria = req.body.id_categoria || '';
	let id_empresa = req.body.id_empresa || '';

	//validando que las variables no este cias 
	if (nombre != '' && precio != '' && existencia != '' && id_categoria != '' && id_empresa != '') {
		//conviritendo las variables a numeros para pre-Formatear el JSON a insertar
		let campos = [precio, existencia, id_categoria, id_empresa];
		let error = false; //variable de control para identificar un valor no numerico
		for (let i = 0; i < 4; i++) {
			campos[i] = Number(campos[i]);
			if (typeof campos[i] === 'number') {
				if (isNaN(campos[i])) {
					error = true;
					break;
				} else {
					//console.log(campos[i]);
				}


			} else {
				//console.log(campos[i]);
				error = true;
				break;
			}
		}
		if (error) {
			res.send(`No se puede insertar el pruducto debido a que ciertos datos no so numericos
				Recuerda que el precio, existencia, id_categoria,id_empresa deben ser numericos
			`);
		} else {
			const producToInsert = {
				nombre: nombre,
				precio: precio,
				existencia: existencia,
				id_categoria: id_categoria,
				id_empresa: id_empresa
			}

			//ahora insertamos en la db
			//Para empezar debemos saber con anticipacion a que empresa le vamos a añadir el producto.
			//Ya tenemos la empresa a agregarle el producto
			const queryResult = await Producto.$relatedQuery('producto_categoria').insert(producToInsert)
			res.json(queryResult);
			console.log(empresa);
			console.log(queryResult);
		}
	} else {
		res.json({
			mensaje: "algo esta vacio"
		});
	}
}
module.exports = {
	getProductos,
	agregarProducto
}