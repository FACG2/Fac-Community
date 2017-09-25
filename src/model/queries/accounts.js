const connection = require('./../database/dbConnection');

const addAccount = (Obj, cb) => {
  const sql = {
    text: `INSERT INTO accounts (socail_network,link,user_id) VALUES ($1,$2,$3)`,
    values: [Obj.socail_network, Obj.link, Obj.user_id]
  };

  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

const updateAccount = (Obj, cb) => {
  const sql = {
    text: `UPDATE accounts SET link=$1 WHERE socail_network=$2 AND user_id=$3`,
    values: [Obj.link, Obj.socail_network, Obj.user_id]
  };

  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

const deleteAccount = (Obj, cb) => {
  const sql = {
    text: `DELETE FROM accounts WHERE socail_network=$1 AND user_id=$2`,
    values: [Obj.socail_network, Obj.user_id]
  };

  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

const getUserAccounts = (Obj, cb) => {
  const sql = {
    text: `SELECT * FROM accounts where user_id =$1`,
    values: [Obj.user_id]
  };
  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = {
  addAccount,
  updateAccount,
  deleteAccount,
  getUserAccounts
};
