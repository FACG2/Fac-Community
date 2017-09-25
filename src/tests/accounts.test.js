const test = require('tape');
const accountFunctions = require('../model/queries/accounts.js');
const {
    getLast,
    selectById
} = require('./helpers/db.js')


test('get user accounts', (t) => {
    obj ={
        user_id:1
    }
    accountFunctions.getUserAccounts(obj, (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      var actual = res[0];
      var expected = { id: 1, user_id: 1, socail_network: 'facebook', link: 'www.facebook.com/1' };
      t.deepEqual(actual, expected, 'should return the same accounts');
      t.end();
    }
  });
});

test('Delete exists account', (t) => {
  // first we create a card
  var obj = {
    user_id: 3,
    socail_network: "facebook",
    link: "www.facebook.com"
  };
  accountFunctions.addAccount(obj, (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      getLast('accounts', (err, res) => {
        if (err) {
          throw err;
        }
        const newAccount = res[0];
        accountFunctions.deleteAccount(newAccount, (err, res) => {
          if (err) {  
            t.notOk(err);
          } else {  

            t.deepEqual(res.command, 'DELETE', 'should run query type DELETE');
            selectById('accounts', newAccount.id, (err, res) => {
              if (err) {
                t.notOk(err);
              }
              t.equal(res.length, 0, `should delete new accounts (with id ${newAccount.id})`);
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
      user_id: 3,
      socail_network: "facebook",
      link: "www.facebook.com"
    };
    accountFunctions.addAccount(obj, (err, res) => {
        if (err) {
            t.notOk(err);
        } else {
            t.deepEqual(res.command, 'INSERT', 'should Insert an item');
            getLast('accounts', (err, res) => {
                if (err) {
                    throw err;
                }
                t.equal(res[0].user_id, obj.user_id, 'should insert the same user_if');
                t.equal(res[0].socail_network, obj.socail_network, 'should insert the same socail Network');
                t.equal(res[0].link, obj.link, 'should insert the same link');
                t.end();
            });
        };
    });

});

test('Check the account update', (t) => {
    var obj = {
      user_id: 3,
      socail_network: "facebook",
      link: "www.facebook.com/face"
    };  
    accountFunctions.addAccount(obj, (err, res) => {
        if (err) {
            t.notOk(err);
        } else {
            getLast('accounts', (err, res) => {
                if (err) {
                    throw err;
                }
                const newAccount = res[0];
                accountFunctions.updateAccount(newAccount, (err, res) => {
                    if (err) {
                        t.notOk(err);
                    } else {
                        t.deepEqual(res.command, 'UPDATE', 'Should update an item');
                        selectById('accounts', newAccount.id, (err, res) => {
                            if (err) {
                                t.notOk(err);
                            } else {
                                t.equal(res[0].link, newAccount.link, `Should have the new value for accounts with id ${newAccount.id})`);
                                t.end();
                            };
                        });

                    };
                });
            });
        };
    });

});