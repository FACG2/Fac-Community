const userFunctions = require('./../model/queries/users.js');

exports.getUserInfo = (req, res, next) => {
  userFunctions.getUserId(req.cookies.username, (err, obj) => {
    if (err) {
      next();
    } else {
      userFunctions.getUserInfo(obj.id, (err, info) => {
        if (err) {
          next();
        } else {
          console.log('hellllllllllllo', takeAnObject(info));
          res.render('profile.hbs', {users: info,
            username: info[0].username,
            title: 'profile',
            cssPath: '/css/profile.css',
            cssPath2: '/coz-css/bootstrap.mini.css',
            cssPath3: '/coz-css/bootstrap.max.css',
            cssPath4: '/coz-css/bootstrap.public.css',
            cssPath5: '/css/home.css'});
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
