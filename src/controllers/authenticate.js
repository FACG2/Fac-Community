const github = require('./../services/github');
const usersFunctions = require('./../model/queries/users.js');
exports.get = (req, res, next) => {
  github.fetchToken(req.query.code, (err, accessToken) => {
    github.getResource('user', accessToken, (err, user) => {
      if (err) {
        next(err);
      } else {
        usersFunctions.checkUser(user.login, (err, check) => {
          if (err) {
            next(err);
          } else {
            if (check) {
              addSignedCookie(res, 'username', user.login);
              res.redirect('/');
            } else {
              github.getResource('user/orgs', accessToken, (err, orgs) => {
                if (err) {
                  next(err);
                } else {
                  isFacMember(orgs, (isMember) => {
                    if (isMember) {
                      usersFunctions.addUser(user, (err, added) => {
                        if (err) {
                          next(err);
                        } else {
                          addSignedCookie(res, 'username', user.login);
                          res.redirect('/update');
                        }
                      });
                    }
                  });
                }
              });
            }
          }
        });
      }
    });
  });
};

const isFacMember = (orgs, cb) => {
  orgs.map((org) => {
    if (org.login === 'foundersandcoders') cb(true);
  });
};

const addSignedCookie = (res, name, value) => {
  res.cookie(name, value, {
    expires: new Date(Date.now() + 900000000000),
    signed: true
  });
};
