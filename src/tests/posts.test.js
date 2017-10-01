const test = require('tape');
const postFunctions = require('../model/queries/posts.js');
const {
    getLast,
    selectById
} = require('./helpers/db.js');

test('Delete exists post', (t) => {
  // first we create a card
  var obj = {
    id: 2,
    user_id: 3,
    title: 'Welcome',
    context: 'Hey guys, welcome in GSG.'
  };
  postFunctions.addPosts(obj, (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      getLast('posts', (err, res) => {
        if (err) {
          throw err;
        }
        const newPost = res[0];
        postFunctions.deletePosts(newPost, (err, res) => {
          if (err) {
            t.notOk(err);
          } else {
            t.deepEqual(res.command, 'DELETE', 'should run query type DELETE');
            selectById('posts', newPost.id, (err, res) => {
              if (err) {
                t.notOk(err);
              }
              t.equal(res.length, 0, `should delete new posts (with id ${newPost.id})`);
              t.end();
            });
          }
        });
      });
    }
  });
});

test('Check the account inseration', (t) => {
  var obj = {
    id: 2,
    user_id: 3,
    title: 'Welcome',
    context: 'Hey guys, welcome in GSG.'
  };
  postFunctions.addPosts(obj, (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      t.deepEqual(res.command, 'INSERT', 'should Insert an item');
      getLast('posts', (err, res) => {
        if (err) {
          throw err;
        }
        t.equal(res[0].user_id, obj.user_id, 'should insert the same user_id');
        t.equal(res[0].title, obj.title, 'should insert the same post title');
        t.equal(res[0].context, obj.context, 'should insert the same context');
        t.end();
      });
    }
  });
});

test('Check the account update', (t) => {
  var obj = {
    id: 2,
    user_id: 3,
    title: 'Welcome',
    context: 'Hey guys, welcome in GSG.'
  };
  postFunctions.addPosts(obj, (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      getLast('posts', (err, res) => {
        if (err) {
          throw err;
        }
        const newPost = res[0];
        postFunctions.updatePosts(newPost, (err, res) => {
          if (err) {
            t.notOk(err);
          } else {
            t.deepEqual(res.command, 'UPDATE', 'Should update an item');
            selectById('posts', newPost.id, (err, res) => {
              if (err) {
                t.notOk(err);
              } else {
                t.equal(res[0].title, newPost.title, `Should have the new value for posts with id ${newPost.id})`);
                t.equal(res[0].context, newPost.context, `Should have the new value for posts with id ${newPost.id})`);
                t.end();
              }
            });
          }
        });
      });
    }
  });
});
