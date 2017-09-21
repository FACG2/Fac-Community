const users = require('./../model/queries/users.js');

exports.update = (req, res, next) => {
// res.end(req.body)
  users.updateUser(req.body, (err, updated) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/home');
    }
  });
};
