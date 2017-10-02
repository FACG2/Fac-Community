const github = require('./../services/github');
const usersFunctions = require('./../model/queries/users.js');

exports.get = (req, res, next) => {
  github.fetchToken(req.query.code, (err, accessToken) => {
    if (err) {
      next(err);
    } else {
      github.getResource('user', accessToken, (err, user) => {
        if (err) {
          next(err);
        } else {
          usersFunctions.checkUser(user.login, (err, check) => {
            if (err) {
              next(err);
            } else {
              if (check) {
                addSignedCookie(res, 'user', user.login);
                addUnSignedCookie(res, 'username', user.login);
                res.redirect('/');
              } else {
                github.getResource('user/orgs', accessToken, (err, orgs) => {
                  if (err) {
                    next(err);
                  } else {
                    if (isFacMember(orgs)) {
                      usersFunctions.addUser(user, (err, added) => {
                        if (err) {
                          next(err);
                        } else {
                          addSignedCookie(res, 'user', user.login);
                          addUnSignedCookie(res, 'username', user.login);
                          res.redirect('/update');
                        }
                      });
                    } else {
                      res.render('login', {error: "You aren't member of Founders and Coders organization on github", cssPath: '/css/login.css'});
                    }
                  }
                });
              }
            }
          });
        }
      });
    }
  });
};

const isFacMember = (orgs) => {
  var isMember = false;
  // for (var i = 0; i < orgs.length; i++) {
  //   if (orgs[i].login === 'foundersandcoders') return true;
  // }
  orgs.forEach((org) => {
    if (org.login === 'foundersandcoders') isMember = true;
  });
  return isMember;
};

const addSignedCookie = (res, name, value) => {
  res.cookie(name, value, {
    expires: new Date(Date.now() + 900000000000),
    signed: true
  });
};

const addUnSignedCookie = (res, name, value) => {
  res.cookie(name, value, {
    expires: new Date(Date.now() + 900000000000),
    signed: false
  });
};
