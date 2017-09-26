const skills = require('./../model/queries/skills.js');
const users = require('./../model/queries/users.js');

exports.get = (req, res, next) => {
  var username = req.query.username;
  users.getUserId(username, (err, obj) => {
    if (err) {
      next();
    } else {
      skills.getSkills(obj.id, (err, skills) => {
        if (err) {
          next();
        } else {
          res.json(skills);
        }
      });
    }
  });
};

exports.post = (req, res, next) => {

};
