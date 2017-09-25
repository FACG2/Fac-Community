const users = require('./../model/queries/users.js');

exports.get = (req, res, next) => {
  var username = req.query.username;
  users.getUserBasicInfo(username, (err, info) => {
    if (err) {
      next();
    } else {
      res.json(info);
    }
  });
};
