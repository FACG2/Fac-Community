
exports.get = (req, res, next) => {
  const username = req.signedCookies.user;
  console.log(username);
  if (username) {
    res.render('home', {user: username, title: 'Home', cssPath: '/css/home.css'});
  } else {
    res.render('login', {title: 'Home', cssPath: '/css/login.css'});
  }
};
