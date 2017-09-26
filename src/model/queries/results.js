const connection = require('./../database/dbConnection');

const getResults = (Obj, cb) => {
  const sql = {
    text: `SELECT * FROM users where user_id =$1`,
    values: [Obj]
  };
  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};
