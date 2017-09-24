const {Pool} = require('pg');
const {DB_CONFIG} = require('../../../config.js');

var dataUrl = DB_CONFIG.database;

const pool = new Pool({connectionString: dataUrl, ssl: true});

module.exports = pool;
