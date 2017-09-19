const db = require('./../../database/dbConnection');

const addSkill = (skill, skillvalue, user_id, cb) => {
    const sql = {
        text: `INSERT INTO skills (skill,skillvalue,user_id) VALUES ('${skill}',${skillvalue},${user_id})`
    };
    connection.query(sql, (err, res) => {
        if (err) {

            cb(err);
        } else {
            cb(null, res.rows);
        }
    });
};

const updateSkill = (skill, skillvalue, user_id, cb) => {
    const sql = {
        text: `UPDATE skills SET skillvalue=${skillvalue} WHERE skill='${skill}' AND user_id=${user_id}`
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
    addSkill,
    updateSkill
};
