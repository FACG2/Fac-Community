var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
require('env2')('./config.env');
var callbackRedirect;
const GITHUB_CLIENT_ID = '715e9326ce748caa28f8';
const GITHUB_CLIENT_SECRET = 'c5fb0ec112c3cf93ecd90d9c69db8d328b2d23a6';

if (process.env === 'test') {
  callbackRedirect = 'http://localhost:3000/auth/github/callback';
} else {
  callbackRedirect = 'https://fac-community.herokuapp.com/auth/github/callback';
}
exports.get = (req, res, next) => {
  

  passport.authenticate('github', { failureRedirect: '/login' });
};
