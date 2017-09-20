const connection = require('./../database/dbConnection');
const addSkill = (Obj, cb) => {
    const sql = {
     text: `INSERT INTO skills (skill,skillvalue,user_id) VALUES ($1,$2,$3)`,
     values: [Obj.skill, Obj.skillvalue, Obj.user_id]
      };

    connection.query(sql, (err, res) => {
        if (err) {
            cb(err);
        } else {
            cb(null, res);
        }
    });
};

const updateSkill = (Obj, cb) => {
    const sql = {
     text: `UPDATE skills SET skillvalue=$1 WHERE skill=$2 AND user_id=$3`,
     values: [Obj.skillvalue, Obj.skill, Obj.user_id]
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
    addSkill,
    updateSkill
};