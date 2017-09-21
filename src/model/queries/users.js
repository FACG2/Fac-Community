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
  console.log(username)
  getUser(username, (err, res) => {
    if(err){
      cb(err)
    }else{
      console.log(res)
      if (res) {
          cb(null, res.username == username?true:false);
      }else{
        cb(null,false )
      }
      
    }
  })

}


const addUser = (Obj, cb) => {
    const sql = {
     text: `INSERT INTO users (username, name, email) VALUES ($1,$2,$3)`,
     values: [Obj.login, Obj.name, Obj.email]
      };

    connection.query(sql, (err, res) => {
        if (err) {
            cb(err);
        } else {
            cb(null, res);
        }
    });
};






const updateUser =(Obj,cb)=>{
  const sql ={
    text:`UPDATE users SET name =$1, email=$2, bio=$3, campus=$4, cohortnum=$5 WHERE username=$6`,
    values: [Obj.name,Obj.email,Obj.bio,Obj.campus,Obj.cohortnum,Obj.username]
  };
  connection.query(sql,(err,res)=>{
    if (err){
      cb (err);
    }else {
      cb(null,res);
    }
  });
};




module.exports = {
  checkUser,
  addUser,
  updateUser
}