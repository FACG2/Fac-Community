// const cookieParser = require('cookie-parser');

exports.get = (req, res, next) => {
  const username = req.signedCookies.username;
  if (username) {
    res.render('home', {user: username});
  } else {
    res.render('home');
  }
};
