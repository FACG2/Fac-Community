const {DB_CONFIG} = require('../../config.js');

exports.get = (req, res, next) => {
  var authUrl = `http://github.com/login/oauth/authorize?client_id=${DB_CONFIG.clientID}&
redirect_uri=${DB_CONFIG.redirect_uri}&scope=user`;
  res.redirect(authUrl);
};
