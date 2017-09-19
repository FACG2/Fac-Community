const connection = require('./../database/dbConnection');
const addSkill = (Obj, cb) => {

    connection.query(`INSERT INTO skills (skill,skillvalue,user_id) VALUES ('${Obj.skill}',${Obj.skillvalue},${Obj.user_id})`, (err, res) => {
        if (err) {
            cb(err);
        } else {
            cb(null, res);
        }
    });
};

const updateSkill = (Obj, cb) => {
    const sql = {
        text: `UPDATE skills SET skillvalue=${Obj.skillvalue} WHERE skill='${Obj.skill}' AND user_id=${Obj.user_id}`
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