# Prueba_plade
API de prueba con los siguientes modulos  - Empresas (Id, rif, descripción)  métodos para agregar, editar, eliminar y listar - Categorias (Id, descripcion) - Modulo inventario (Id, nombre, precio, existencia, categoria a la que pertenece). Nodejs y Mysql, objection.
#<-- Rutas disponibles de la API -->

	#URL 				| Verbo http | description
	/						GET			Invoca una bienvenida a la API
	/empresas/add 			POST    	Recibe el rif, descripcion. Agrega nueva empresa a la DB
	/empresas/add  	 		GET			Invoca un mensaje, de mal uso del Enpoint.
	/empresas  				GET 		Hace una consulta a todas las empresas dentro de la DB
	/empresas/delate:id 	GET			Busca y elimina la empresa con el ID espesificado
	