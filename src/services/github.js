const qs = require('querystring');
const request = require('request');
const {DB_CONFIG} = require('../../config.js');

module.exports = {
  fetchToken: (code, callback) => {
    request.post({
      url: 'https://github.com/login/oauth/access_token',
      form: {
        client_id: DB_CONFIG.clientID,
        client_secret: DB_CONFIG.clientSecret,
        code: code
      }
    }, (err, res, body) => {
      if (err) {
        callback(err);
      } else {
        body = qs.parse(body);
        const accessToken = body.access_token;
        callback(null, accessToken);
      }
    });
  },
  getResource: (resource, accessToken, callback) => {
    request.get({
      url: 'https://api.github.com/' + resource + '?access_token=' + accessToken,
      headers: { 'User-Agent': 'request' }
    }, (err, res, body) => callback(err, JSON.parse(body)));
  }
};
