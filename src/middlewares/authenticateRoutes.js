module.exports = (req, res, next) => {
  const user = req.signedCookies.username;
  if (authRoute(req.path)) {
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).end();
    }
  } else {
    next();
  }
};

const authRoute = (route) => {
  var routes = [ '/update', '/updateuser' ];
  return routes.includes(route);
};
