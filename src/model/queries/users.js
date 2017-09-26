const connection = require('./../database/dbConnection');

const getUser = (username, cb) => {
  const sql = {
    text: `SELECT username FROM users WHERE username = $1`,
    values: [username]
  };
  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows[0]);
    }
  });
};

const getUserBasicInfo = (username, cb) => {
  const sql = {
    text: `SELECT name,email,bio FROM users WHERE username = $1`,
    values: [username]
  };
  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows[0]);
    }
  });
};

const getUserInfo = (userId, cb) => {
  const sql = {
    text: `SELECT distinct(users.name), users.email, users.bio, users.campus, users.cohortnum ,skills.skill ,skills.skillvalue, accounts.link , accounts.socail_network FROM users LEFT JOIN skills on skills.user_id = users.id LEFT JOIN accounts on accounts.user_id = users.id WHERE users.id= $1 OR accounts.user_id= $1 OR skills.user_id = $1`,
    values: [userId]
  };
  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

const getUserId = (username, cb) => {
  const sql = {
    text: `SELECT id FROM users WHERE username = $1`,
    values: [username]
  };
  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows[0]);
    }
  });
};

const checkUser = (username, cb) => {
  getUser(username, (err, res) => {
    if (err) {
      cb(err);
    } else {
      if (res) {
        cb(null, res.username === username);
      } else {
        cb(null, false);
      }
    }
  });
};

const addUser = (Obj, cb) => {
  const sql = {
    text: `INSERT INTO users (username, name, email) VALUES ($1,$2,$3)`,
    values: [Obj.login, Obj.name, Obj.email]
  };

  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

const updateUser = (Obj, cb) => {
  const sql = {
    text: `UPDATE users SET name =$1, email=$2, bio=$3, campus=$4, cohortnum=$5 WHERE username=$6`,
    values: [Obj.name, Obj.email, Obj.bio, Obj.campus, Obj.cohortnum, Obj.username]
  };
  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

module.exports = {
  checkUser,
  addUser,
  updateUser,
  getUserId,
  getUserBasicInfo,
  getUserInfo
};
