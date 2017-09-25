const test = require('tape');
const skillFunctions = require('../model/queries/skills.js');
const {
    getLast,
    selectById
} = require('./helpers/db.js');

test("Check the user's existing", (t) => {
  skillFunctions.checkSkill('JS', (err, res) => {
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

test('get user skills', (t) => {
  obj = {
    user_id: 1
  };
  skillFunctions.getSkills(obj, (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      var actual = res[0];
      var expected = { id: 1, skill: 'JS', skillvalue: 90, user_id: 1 };
      t.deepEqual(actual, expected, 'should return the same object');
      t.end();
    }
  });
});

test('Check the skill inseration', (t) => {
  var obj = {
    skill: 'Database',
    skillvalue: 94,
    user_id: 1
  };

  skillFunctions.addSkill(obj, (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      t.deepEqual(res.command, 'INSERT', 'should Insert an item');
      getLast('skills', (err, res) => {
        if (err) {
          throw err;
        }
        t.equal(res[0].skill, obj.skill, 'should insert the same skill');
        t.equal(res[0].skillvalue, obj.skillvalue, 'should insert the same skillvalue');
        t.equal(res[0].user_id, obj.user_id, 'should insert the same skill');
        t.end();
      });
    }
  });
});

test('Check the skill update', (t) => {
  var obj = {
    skill: 'Database',
    skillvalue: 60,
    user_id: 1
  };
  skillFunctions.addSkill(obj, (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      getLast('skills', (err, res) => {
        if (err) {
          throw err;
        }
        const newSkill = res[0];
        skillFunctions.updateSkill(newSkill, (err, res) => {
          if (err) {
            t.notOk(err);
          } else {
            t.deepEqual(res.command, 'UPDATE', 'Should update an item');
            selectById('skills', newSkill.id, (err, res) => {
              if (err) {
                t.notOk(err);
              } else {
                t.equal(res[0].skillvalue, newSkill.skillvalue, `Should have the new value for skill with id ${newSkill.id})`);
                t.end();
              }
            });
          }
        });
      });
    }
  });
});
