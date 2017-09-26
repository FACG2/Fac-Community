const userFunctions = require('./../model/queries/users.js');

exports.getUserInfo = (req, res, next) => {
  userFunctions.getUserId(req.cookies.username, (err, obj) => {
    if (err) {
      next();
    } else {
      userFunctions.getUserInfo(obj.id, (err, info) => {
        if (err) {
          next();
        } else {
          console.log('hellllllllllllo', info);
          res.render('profile.hbs', {users: info,
            username: info[0].username,
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
