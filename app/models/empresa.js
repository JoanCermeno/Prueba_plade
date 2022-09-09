//Modelos de knex AUI SE ALOJAN TODOS LOS MODELOS DE MI DB
const { Model } = require('objection');
const Producto = require('./producto');

class Empresa extends Model {
    static get tableName(){
        return 'empresas';
    }

    $beforInsert(){
        this.cratedAt = new Date();
    }
    $beforUpdate(){
        this.updateAt = new Date();
    }

    static get nameColum(){
        return 'name';
    }
    static get rifColum(){
        return 'rif';
    }
    static get jsonSchema(){
        return {
            type : 'object',
            required : ['rif','description'], //Campos obligatorios, rif y descripcion de la empresa
            properties : {
                id : { type: 'integer'},
                rif : {type : 'string' , minLength : 7, maxLength: 255}, //caracters minimos de un rif
                description : {type : 'string'},
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
                from : 'id', //PK De la empresa
                to: 'id_empresa' // FK de productos
            }
        }
    }
}

module.exports = Empresa;

