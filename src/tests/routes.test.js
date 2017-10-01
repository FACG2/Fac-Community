const test = require('tape');
const request = require('supertest');

const app = require('../app.js');

test('home route without a cookie should return login page', t => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /text/)
    .expect('Content-Length', '1574')
    .end((err, res) => {
      t.same(res.statusCode, 200, 'Status code is 200');
      t.same(err, null, 'should not return an error');
      t.end();
    });
});

// test('home route with a cookie should return login home', t => {
//   request(app)
//     .get('/')
//     .set('Cookie', ['user=s%3Aabdhalees.8AxEZo7OO0fClU8FMinq%2FMDLPRjoZi3upg6j6bxrrqg'])
//     .expect(200)
//     .expect('Content-Type', /text/)
//     .expect('Content-Length', '7006')
//     .end((err, res) => {
//       t.same(res.statusCode, 200, 'Status code is 200');
//       t.same(err, null, 'should not return an error');
//       t.end();
//     });
// });
