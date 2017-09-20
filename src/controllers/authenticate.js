const github = require('./../services/github');
const usersFunctions = require('./../model/queries/users.js')
exports.get = (req, res, next) => {
  github.fetchToken(req.query.code, (accessToken) => {
    github.getResource('user', accessToken, (err, user) => {
      if (err) {
        next(err);
      } else {
        usersFunctions.checkUser(user.login, (err, check)=>{
          if(err){
            next(err);
          }else{
            if(check){
              res.redirect('/home')
            }else{
              usersFunctions.addUser(user, (err, added)=>{
                console.log(err)
                if(err){
                  next(err);
                }else{
                  res.redirect('/update')
                }
              })
            }
          }
        })
        // console.log('not error', user);
      }
    });
  });
};
