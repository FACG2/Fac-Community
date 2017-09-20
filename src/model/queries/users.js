const connection = require('./../database/dbConnection');



const getUser = (username , cb) => {
  const sql = {
     text: `SELECT username FROM users WHERE username = $1`,
     values: [username]
      };
  connection.query(sql, (err, res) => {
    if (err) {
      cb(err)
    } else {
      cb(null, res.rows[0]);
    }
  });
};

const checkUser = (username, cb)=>{
  getUser(username, (err, res) => {
    if(err){
      cb(err)
    }else{
      cb(null,res.username == username?true:false) ;
    }
  })

}

module.exports = {
  checkUser
}