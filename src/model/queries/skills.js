const connection = require('./../database/dbConnection');
const addSkill = (Obj, cb) => {

    connection.query(`INSERT INTO skills (skill,skillvalue,user_id) VALUES ($1,$2,$3)`, (err, res) => {
        if (err) {
            cb(err);
        } else {
            cb(null, res);
        }
    }, [Obj.skill, Obj.skillvalue, Obj.user_id]);
};

const updateSkill = (Obj, cb) => {


    connection.query(`UPDATE skills SET skillvalue=$1 WHERE skill=$2 AND user_id=$3`, (err, res) => {
        if (err) {
            cb(err);
        } else {
            cb(null, res);
        }
    }, [Obj.skillvalue, Obj.skill, Obj.user_id]);
};

module.exports = {
    addSkill,
    updateSkill
};