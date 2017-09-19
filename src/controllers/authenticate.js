const github = require('./../services/github');

exports.get = (req, res) => {
  github.fetchToken(req.query.code, (accessToken) => {
    github.getResource('user', accessToken, (err, user) => {
      if (err) {
        console.log('error', err);
      } else {
        console.log('not error', user);
      }
      res.end();
    });
  });
};
