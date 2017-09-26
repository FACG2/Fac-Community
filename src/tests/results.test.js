const test = require('tape');
const getResults = require('../model/queries/results.js');
test('check the search users', (t) => {
  var obj = {
    user_id: 1
  };
  getResults(obj, (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      var actual = res[0];
      var expected = {id: 1, username: 'abd'};
      t.deepEqual(actual, expected, 'should return the same object searched');
      t.end();
    }
  });
});
