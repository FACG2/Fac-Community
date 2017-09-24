
const fs = require('fs');
const dbConnection = require('./dbConnection.js');

const sql = fs.readFileSync(`${__dirname}/dbBuild.sql`).toString();

dbConnection.query(sql, (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log('Build successfuly!');
  }
});
