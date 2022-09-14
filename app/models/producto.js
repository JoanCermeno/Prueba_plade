const { Model } = require('objection');

class Producto extends Model {
	static get tableName(){
        return 'productos';
    }

    $beforInsert(){
        this.cratedAt = new Date();
    }
    $beforUpdate(){
        this.updateAt = new Date();
    }
    static get totalProductosPorEmpresas(){ //este metodo me contabiliza la cantidad de productos que pertenencen a una empresa id
        return 'total';
    }
    static get empresaIdColumn(){ //esto es para saber a que empresa pertenece cada producto
    	return 'id_empresa';
    }
     static get jsonSchema(){
        return {
            type : 'object',
            required : ['nombre','precio' , 'existencia' , 'id_categoria'], //Campos obligatorios, de los productos
            properties : {
                id : { type: 'integer'},
                nombre : {type : 'string' , minLength : 1, maxLength: 20},
                precio : {type : 'float'},
                existencia : {type : 'integer'},
                id_categoria : {type : 'integer'},
                id_empresa : {type : 'integer'}
            }
        }
    }
} 
module.exports = Producto;