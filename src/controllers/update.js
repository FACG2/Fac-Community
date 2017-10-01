exports.get = (req, res, next) => {
  const username = req.signedCookies.user;
  if (username) {
    res.render('update',
      {
        title: 'Update',
        user: req.user,
        cssPath: '/css/update.css',
        cssPath2: '/css/home.css'
      });
  } else {
    res.render('login',
      {
        title: 'Home',
        cssPath: '/css/login.css'
      });
  }
};
