const connection = require('./../database/dbConnection');

const addPosts = (Obj, cb) => {
  const sql = {
    text: `INSERT INTO posts (user_id, title, context) VALUES ($1,$2,$3)`,
    values: [Obj.user_id, Obj.title, Obj.context]
  };

  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

const updatePosts = (Obj, cb) => {
  const sql = {
    text: `UPDATE posts SET title=$1, context=$2 WHERE id=$3 AND user_id=$4`,
    values: [Obj.title, Obj.context, Obj.id, Obj.user_id]
  };

  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

const deletePosts = (Obj, cb) => {
  const sql = {
    text: `DELETE FROM posts WHERE id=$1 AND user_id=$2`,
    values: [Obj.id, Obj.user_id]
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
  addPosts,
  updatePosts,
  deletePosts
};
