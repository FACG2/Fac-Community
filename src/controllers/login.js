require('env2')('./config.env');
var callbackRedirect;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'test') {
  callbackRedirect = 'http://localhost:3000';
} else {
  callbackRedirect = 'https://facommunity.herokuapp.com';
}
console.log(callbackRedirect);
exports.get = (req, res, next) => {
  console.log(callbackRedirect);
  var authUrl = `http://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&
redirect_uri=${callbackRedirect}&scope=user`;
  console.log(authUrl);
  res.redirect(authUrl);
};
