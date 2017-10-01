exports.get = (req, res, next) => {
  res.render('login',
    {
      title: 'Home',
      cssPath: '/css/login.css'
    });
};
