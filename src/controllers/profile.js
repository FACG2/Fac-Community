const userFunctions = require('./../model/queries/users.js');

exports.get = (req, res, next) => {
  var username;
  if (typeof req.params.username === 'undefined') {
    username = req.user;
  } else {
    username = req.params.username;
  }
  userFunctions.getUserId(username, (err, obj) => {
    if (err) {
      next();
    } else {
      userFunctions.getUserInfo(obj.id, (err, info) => {
        if (err) {
          next();
        } else {
          console.log(info);
          res.render('profile.hbs', {user: req.user,
            profile: info,
            title: 'profile',
            cssPath: '/css/profile.css',
            cssPath2: '/coz-css/bootstrap.mini.css',
            cssPath3: '/coz-css/bootstrap.max.css',
            cssPath4: '/coz-css/bootstrap.public.css',
            cssPath5: '/css/home.css'});
        }
      });
    }
  });
};
