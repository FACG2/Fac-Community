
exports.get = (req, res, next) => {
  const username = req.signedCookies.username;
  if (username) {
    res.render('home', {user: username, title: 'Home', cssPath: '/css/home.css'});
  } else {
    res.render('login', {title: 'Home', cssPath: '/css/login.css'});
  }
};
