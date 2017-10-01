
const userFunctions = require('./../model/queries/users.js');

exports.get = (req, res, next) => {
  var username = req.cookies.username;
  userFunctions.getUserId(username, (err, obj) => {
    if (err) {
      next();
    } else {
      userFunctions.getUserInfo(obj.id, (err, info) => {
        if (err) {
          next();
        } else {
          res.render('editprofile',
            {
              title: 'Edit profile',
              user: username,
              userInfo: info,
              cssPath: '/css/update.css',
              cssPath2: '/css/home.css'
            });

        }
      });
    }
  });
};
