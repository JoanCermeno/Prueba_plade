//Modelos de knex AUI SE ALOJAN TODOS LOS MODELOS DE MI DB
const { Model } = require('objection');
const Producto = require('./producto');

class Categoria extends Model {
    $beforInsert(){
        this.cratedAt = new Date();
    }
    $beforUpdate(){
        this.updateAt = new Date();
    }

    static get desColum(){
        return 'des';
    }

    static get jsonSchema(){
        return {
            type : 'object',
            required : ['des'], //Campos obligatorios, descripcion 
            properties : {
                id : { type: 'integer'},
                des : {type : 'string'},
                cratedAt : {type : 'string'},
                updateAt : {type : 'string'}
            }
        }
    }
    static relationMappings = {
        producto : {
            relation : Model.HasOneRelation,
            modelClass : Producto,
            join: {
                from : 'id', //PK De la categoria
                to: 'id_categoria' // FK de categoria
            }
        }
    }
}

module.exports = Categoria;