const userFunctions = require('./../model/queries/users.js');

exports.get = (req, res, next) => {
  var username;
  if (typeof req.params.username === 'undefined') {
    username = req.user;
  } else {
    username = req.params.username;
  }
  userFunctions.getUserId(username, (err, obj) => {
    if (err) {
      next();
    } else {
      userFunctions.getUserInfo(obj.id, (err, info) => {
        if (err) {
          next();
        } else {
          res.render('profile.hbs',
            {
              users: info,
              profile: takeAnObject(info),
              title: 'profile',
              cssPath: '/css/profile.css',
              cssPath2: '/coz-css/bootstrap.mini.css',
              cssPath3: '/coz-css/bootstrap.max.css',
              cssPath4: '/coz-css/bootstrap.public.css',
              cssPath5: '/css/home.css'
            });
        }
      });
    }
  });
};

function takeAnObject (arr) {
  var ourObj = {};
  ourObj.name = arr[0].name;
  ourObj.email = arr[0].email;
  ourObj.bio = arr[0].bio;
  ourObj.avatar = arr[0].avatar;
  ourObj.campus = arr[0].campus;
  ourObj.cohortnum = arr[0].cohortnum;
  ourObj.email = arr[0].email;

  var skills = arr.reduce((accum, item) => {
    accum[item.skill] = item.skillvalue;
    return accum;
  }, {});

  ourObj.skills = Object.keys(skills).map(skill => ({ skill, skillvalue: skills[skill] }));

  var accounts = arr.reduce((accum, item) => {
    accum[item.socail_network] = item.link;
    return accum;
  }, {});

  ourObj.accounts = Object.keys(accounts).map(account => ({ account, accountLink: accounts[account]}));

  return ourObj;
}
