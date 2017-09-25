
exports.get = (req, res, next) => {
  const username = req.signedCookies.username;
  if (username) {
    res.render('home', {user: username});
  } else {
    res.render('login', {title: 'Home', cssPath: '/css/login.css'});
  }
};
