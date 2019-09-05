const knex = require('knex');

const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];

// { development: {} }
// config.development === config['development']
// both of these are the same 

module.exports = knex(config);
