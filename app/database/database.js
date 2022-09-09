const { Model } = require('objection');
const Knex = require('knex');
//iniciamos knex 
const knex = Knex({
	client: 'mysql',
  	useNullAsDefault: true,
	connection: {
		host: "localhost",
		user: "root",
		pass: '',
		database: "prueba"
	}
});
// Give the knex instance to objection.
Model.knex(knex);
module.exports = knex;
