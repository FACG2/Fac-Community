const db = require('./../../database/dbConnection');


const CheckUser = (obj , cb) => {
  connection.query(`SELECT id,username FROM users WHERE username = '${Obj.username}'`, (err, result) => {
    if (err) {
      cb(err)
    } else {
      cb(null, result);
    }
  });
};