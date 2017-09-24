exports.get = (req, res, next) => {
  res.clearCookie('username');
  res.render('home');
};
