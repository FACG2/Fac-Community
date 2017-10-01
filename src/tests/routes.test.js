const test = require('tape');

const request = require('supertest');
const app = require('./../app');

test('All routes should return the expected results', t => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /text/)
    .end((err, res) => {
      t.same(res.statusCode, 200, 'Status code is 200');
      t.error(err, 'No error');
      t.end();
    });
});

test('Name of the user should be "Ahmed Ajour"', t => {
  request(app)
    .get('/basicinfo')
    .set('Cookie', ['user=s%3Amahmoudalwadia.UKKaaVsUeoSTWdEjABRZ3%2FWWRK%2BAyG8rYmbUjvzHRnA'])
    .query({ username: 'mahmoudalwadia' })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.same(res.statusCode, 200, 'Status code is 200');
      t.error(err, 'No error');
      t.same(res.body.name, 'Mahmoud Alwadia');
      t.end();
    });
});

test('Should Update user info', t => {
  const userInfo = { name: 'Mahmoud Alwadia',
    email: 'mahmoud.alwadia@gmail.com',
    bio: 'The one who knocks.',
    campus: 'Gaza',
    cohortnum: '2',
    skill: 'JS',
    skillvalue: '100',
    link: [ 'wadia', 'wadia', 'wadia', 'wadia' ] };
  request(app)
    .post(`/updateuser`)
    .set('Cookie', ['user=s%3Amahmoudalwadia.UKKaaVsUeoSTWdEjABRZ3%2FWWRK%2BAyG8rYmbUjvzHRnA'])
    .send(userInfo)
    .expect(201)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.same(res.statusCode, 302, 'Status code is 302');
      t.error(err, 'No error');
      t.end();
    });
});
