require('env2')('./config.env');
var callbackRedirect;

if (process.env.NODE_ENV === 'test') {
  callbackRedirect = 'http://127.0.0.1:3000';
} else {
  callbackRedirect = 'https://facommunity.herokuapp.com/';
}

exports.get = (req, res, next) => {
  var authUrl = `http://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&
redirect_uri=${callbackRedirect}&scope=user`;
  res.redirect(authUrl);
};
