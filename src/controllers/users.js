const users = require('./../model/queries/users.js');
const skills = require('./../model/queries/skills.js');
const accounts = require('../model/queries/accounts.js');

exports.update = (req, res, next) => {
  var obj = Object.assign({}, req.body);
  obj.username = req.user;
  users.updateUser(obj, (err, updated) => {
    if (err) {
      next(err);
    } else {
      users.getUserId(obj.username, (err, userID) => {
        if (err) {
          next();
        } else {
          if (Array.isArray(req.body.skill)) {
            req.body.skill.forEach((skill, i) => {
              var form = {skill: skill,
                skillvalue: req.body.skillvalue[i],
                user_id: userID.id};
              skills.addSkill(form, (err, skills) => {
                if (err) {
                  next();
                } else {
                }
              });
            });
          } else {
            var form = {skill: req.body.skill,
              skillvalue: req.body.skillvalue,
              user_id: userID.id};
            skills.addSkill(form, (err, skills) => {
              if (err) {
                next();
              } else {
              }
            });
          }
          req.body.link.forEach((link, i) => {
            if (link !== '') {
              var account = {
                socail_network: networks[i],
                link: link,
                user_id: userID.id
              };
              accounts.addAccount(account, (accounts) => {
              });
            }
          });
        }
        res.redirect('/');
      });
    }
  });
};

var networks = ['Facebook', 'Twitter', 'Instagram', 'Linkedin'];
