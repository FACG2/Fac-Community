const test = require('tape');
const commentFunctions = require('../model/queries/comments.js');
const {
    getLast,
    selectById
} = require('./helpers/db.js');

test('Delete exists comment', (t) => {
  // first we create a card
  const obj = {
    user_id: 2,
    post_id: 2,
    context: 'Cool!'
  };
  commentFunctions.addComments(obj, (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      getLast('comments', (err, res) => {
        if (err) {
          throw err;
        }
        const newComment = res[0];
        commentFunctions.deleteComments(newComment, (err, res) => {
          if (err) {
            t.notOk(err);
          } else {
            t.deepEqual(res.command, 'DELETE', 'should run query type DELETE');
            selectById('comments', newComment.id, (err, res) => {
              if (err) {
                t.notOk(err);
              }
              t.equal(res.length, 0, `should delete new comments (with id ${newComment.id})`);
              t.end();
            });
          }
        });
      });
    }
  });
});

test('Check the comment inseration', (t) => {
  var obj = {
    user_id: 2,
    post_id: 2,
    context: 'Cool!'
  };
  commentFunctions.addComments(obj, (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      t.deepEqual(res.command, 'INSERT', 'should Insert an item');
      getLast('comments', (err, res) => {
        if (err) {
          throw err;
        }
        t.equal(res[0].user_id, obj.user_id, 'should insert the same user id');
        t.equal(res[0].post_id, obj.post_id, 'should insert the same post id');
        t.equal(res[0].context, obj.context, 'should insert the same context');
        t.end();
      });
    }
  });
});

test('Check the comment update', (t) => {
  var obj = {
    user_id: 2,
    post_id: 2,
    context: 'Cool!'
  };
  commentFunctions.addComments(obj, (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      getLast('comments', (err, res) => {
        if (err) {
          throw err;
        }
        const newComment = res[0];
        commentFunctions.updateComments(newComment, (err, res) => {
          if (err) {
            t.notOk(err);
          } else {
            t.deepEqual(res.command, 'UPDATE', 'Should update an item');
            selectById('comments', newComment.id, (err, res) => {
              if (err) {
                t.notOk(err);
              } else {
                t.equal(res[0].context, newComment.context, `Should have the new value for comments with id ${newComment.id})`);
                t.end();
              }
            });
          }
        });
      });
    }
  });
});
