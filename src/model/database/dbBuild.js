
const fs = require('fs');
const dbConnection = require('./dbConnection.js');

const sql = fs.readFileSync(`${__dirname}/dbBuild.sql`).toString();

dbConnection.query(sql, (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log('Building successfuly!');
  }
});


// with promises
const { QueryFile } = require('pg-promise');
const path = require('path');
const db = require('./dbConnection');

const sql = file => QueryFile(path.join(__dirname, file), { minify: true });

const build = sql('./build.sql');

db
  .query(build)
  .then(res => console.log('res', res))
  .catch(e => console.error('error', e));