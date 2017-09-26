
exports.get = (req, res, next) => {
  const username = req.signedCookies.user;
  if (username) {
    res.render('home', {user: username, title: 'Home', cssPath: '/css/home.css'});
  } else {
    res.render('login', {title: 'Home', cssPath: '/css/login.css'});
  }
};
