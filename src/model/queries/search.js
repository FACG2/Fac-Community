const connection = require('./../database/dbConnection');

const searchAll = (searchInput, cb) => {
  searchInput = searchInput.toLowerCase();
  const sql = {
    text: `SELECT distinct(users.name), users.username FROM users
           LEFT JOIN skills on skills.user_id = users.id
           where LOWER(users.username) like $1 OR  LOWER(users.name) like $1 OR LOWER(skills.skill) like $1 OR LOWER(users.campus) like $1 `,
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

//
// text: `SELECT distinct(users.name), users.id, users.username, FROM users
//        LEFT JOIN skills on skills.user_id = users.id
//        where LOWER(users.username) like $1 OR  LOWER(users.name) like $1 OR LOWER(skills.skill) like $1 OR LOWER(users.campus) like $1 `,
