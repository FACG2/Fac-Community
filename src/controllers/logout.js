exports.get = (req, res, next) => {
  res.clearCookie('username');
  res.clearCookie('user');
  res.redirect('/');
};
