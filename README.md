# Prueba_plade 😎
API de prueba con los siguientes modulos  - Empresas (Id, rif, descripción)  métodos para agregar, editar, eliminar y listar - Categorias (Id, descripcion) - Modulo inventario (Id, nombre, precio, existencia, categoria a la que pertenece). Nodejs y Mysql, objection.
# 😜 ..::Rutas disponibles de la API::.. 🤩


1) /						<GET>	    Invoca una bienvenida a la API.

2) /empresas/add 			<POST>   	Recibe el rif, descripcion. Agrega nueva empresa a la DB

3) /empresas  				<GET> 		Hace una consulta a todas las empresas dentro de la DB

4) /empresas?id=valor	    <DELATE>    Busca y elimina la empresa by ID 

5) /empresas/search?id=VALOR <GET>      Busca empresa por el id de la misma