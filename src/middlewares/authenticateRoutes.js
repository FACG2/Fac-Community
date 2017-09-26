module.exports = (req, res, next) => {
  const user = req.signedCookies.user;
  if (authRoute(req.path.split('/')[1])) {
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).send('UNAUTHORIZED');
    }
  } else {
    next();
  }
};

const authRoute = (route) => {
  var routes = [ 'updateuser', 'basicinfo', 'skills', 'logout', 'update', 'profile', 'search', 'updateuser' ];
  return routes.includes(route);
};
