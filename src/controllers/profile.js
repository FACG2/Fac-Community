const userFunctions = require('./../model/queries/users.js');

exports.getUserInfo = (req, res, next) => {
  var username = req.params.username;
  userFunctions.getUserId(username, (err, obj) => {
    if (err) {
      next();
    } else {
      userFunctions.getUserInfo(obj.id, (err, info) => {
        if (err) {
          next();
        } else {
          res.render('profile.hbs', {users: info,
            profile: info[0],
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
