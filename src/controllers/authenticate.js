const github = require('./../services/github');

exports.get = (req, res) => {
  github.fetchToken(req.query.code, (accessToken) => {
    github.getResource('user', accessToken, (err, user) => {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
      res.end();
    });
  });
};
