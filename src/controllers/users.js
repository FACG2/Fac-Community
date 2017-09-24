const users = require('./../model/queries/users.js');

exports.update = (req, res, next) => {
// res.end(req.body)
  var Obj = Object.assign({}, req.body);
  Obj.username = req.user
  users.updateUser(Obj, (err, updated) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/home');
    }
  });
};
