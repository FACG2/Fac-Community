var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
require('env2')('./config.env');
var callbackRedirect;

if (process.env === 'test') {
  callbackRedirect = 'http://localhost:3000';
} else {
  callbackRedirect = 'https://fac-community.herokuapp.com/';
}

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});


passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: callbackRedirect
},
  function (accessToken, refreshToken, profile, done) {

    process.nextTick(function () {

      return done(null, profile);
    });
  }
));


app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }),
  function (req, res) {

  });


app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('/');
  });

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}
