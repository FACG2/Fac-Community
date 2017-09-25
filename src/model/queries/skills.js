const connection = require('./../database/dbConnection');

const getSkills = (Obj, cb) => {
    const sql = {
     text: `SELECT * FROM skills where user_id =$1`,
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

const getSkill = (skill, cb) => {
  const sql = {
    text: `SELECT skill FROM skills WHERE skill = $1`,
    values: [skill]
  };
  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows[0]);
    }
  });
};

const checkSkill = (skill, cb) => {
  getSkill(skill, (err, res) => {
    if (err) {
      cb(err);
    } else {
      if (res) {
        cb(null, res.skill === skill);
      } else {
        cb(null, false);
      }
    }
  });
};


module.exports = {
    addSkill,
    updateSkill,
    checkSkill,
    getSkills
};