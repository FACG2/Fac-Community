const profileFunction = require('./../model/queries/users.js');

exports.getUserInfo = (req, res, next) => {
  var username = req.query.username;
  profileFunction.getUserId(username, (err, obj) => {
    if (err) {
      next();
    } else {
      profileFunction.getUserInfo(obj.id, (err, info) => {
        if (err) {
          next();
        } else {
          res.redirct('/profile');
        }
      });
    }
  });
};
