require('env2')('./config.env');
const pg = require('pg');

const {Pool} = require('pg');
require('env2')('./config.env');
var url = '';
if (!process.env.DATABASE_URL) {
  throw new Error('No DATABASE_URL provided');
}

if (process.env.NODE_ENV === 'test') {
  url = process.env.TEST_URL;
} else {
  url = process.env.DATABASE_URL;
}
const pool = new Pool({connectionString: url, ssl: true});
module.exports = pool;



//with promise

const pgp = require('pg-promise')();

const herokuDB = {
  host: process.env.HEROKU_HOST,
  user: process.env.HEROKU_USER,
  password: process.env.HEROKU_PW,
  database: process.env.HEROKU_DB,
  ssl: true,
};

const localDB = {
  host: 'localhost',
  port: 5432,
  database: 'fac-express',
};

const connection = process.env.NODE_ENV === 'production' ? herokuDB : localDB;

const db = pgp(connection);
module.exports = db;