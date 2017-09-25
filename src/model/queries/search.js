const connection = require('./../database/dbConnection');

const searchAll = (searchInput, cb) => {
  const sql = {
    text: `SELECT distinct(users.name), users.id, users.username FROM users 
           LEFT JOIN skills  on skills.user_id = users.id 
           where users.username like $1 OR  users.name like $1 OR skills.skill like $1`,
    values: [`%${searchInput}%`] };

  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = {
  searchAll
};
