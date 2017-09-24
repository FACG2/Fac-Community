const connection = require('./../database/dbConnection');

const addComments = (Obj, cb) => {
    const sql = {
     text: `INSERT INTO comments (user_id, post_id, context) VALUES ($1,$2,$3)`,
     values: [Obj.user_id, Obj.post_id, Obj.context]
      };

    connection.query(sql, (err, res) => {
        if (err) {
            cb(err);
        } else {
            cb(null, res);
        }
    });
};

const updateComments = (Obj, cb) => {
    const sql = {
     text: `UPDATE comments SET context=$1 WHERE post_id=$2 AND user_id=$3`,
     values: [Obj.context, Obj.post_id, Obj.user_id]
      };


    connection.query(sql, (err, res) => {
        if (err) {
            cb(err);
        } else {
            cb(null, res);
        }
    });
};

const deleteComments = (Obj, cb) => {
    const sql = {
     text: `DELETE FROM comments WHERE post_id=$1 AND user_id=$2`,
     values: [Obj.post_id, Obj.user_id]
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
  addComments,
  updateComments,
  deleteComments
}