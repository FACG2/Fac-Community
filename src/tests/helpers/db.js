const dbConnetion = require('../../model/database/dbConnection.js')
const getLast = (tableName, cb) => {
    dbConnetion.query(`SELECT * FROM ${tableName} ORDER BY id DESC LIMIT 1`, (err, res) => {
        if (err) {
            cb(err);
        } else {
            cb(null, res.rows);
        }
    });
};
const selectById = (tableName, id, cb) => {
    dbConnetion.query(`SELECT * FROM ${tableName} WHERE id=${id}`, (err, res) => {
        if (err) {
            cb(err)
        } else {
            cb(null, res.rows);
        }
    });
};

module.exports = {
    getLast,
    selectById
};