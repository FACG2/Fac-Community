const test = require('tape');
const usersFunctions = require('../model/queries/users.js');
var crypto = require('crypto');
const {
    getLast,
    selectById
} = require('./helpers/db.js');

test("Check the user's existing", (t) => {
  usersFunctions.checkUser('wadia', (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      var actual = res;
      var expected = true;
      t.equal(actual, expected, 'should return true');
    }
    t.end();
  });
});

test('get user ID', (t) => {
  usersFunctions.getUserId('wadia', (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      var actual = res.id;
      var expected = 3;
      t.deepEqual(actual, expected, 'should return the same id');
      t.end();
    }
  });
});

test('Check the user inseration', (t) => {
  var username = crypto.randomBytes(10).toString('hex');
  var obj = {
    login: username,
    name: 'Ahmeqd Ajour',
    email: 'ahmqed.ajourr@gmail.com'
  };

  usersFunctions.addUser(obj, (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      t.deepEqual(res.command, 'INSERT', 'should Insert an item');
      getLast('users', (err, res1) => {
        if (err) {
          throw err;
        }
        t.equal(res1[0].username, obj.login, 'should insert the same user');
        t.equal(res1[0].name, obj.name, 'should insert the same name');
        t.equal(res1[0].email, obj.email, 'should insert the same email');
        t.end();
      });
    }
  });
});
