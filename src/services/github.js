const qs = require('querystring');
const request = require('request');

module.exports = {
  fetchToken: (code, callback) => {
    request.post({
      url: 'https://github.com/login/oauth/access_token',
      form: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
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
