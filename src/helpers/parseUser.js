module.exports = arr => {
  var ourObj = {};
  ourObj.name = arr[0].name;
  ourObj.email = arr[0].email;
  ourObj.bio = arr[0].bio;
  ourObj.campus = arr[0].campus;
  ourObj.cohortnum = arr[0].cohortnum;
  ourObj.email = arr[0].email;
  ourObj.avatar = arr[0].avatar;

  var skills = arr.reduce((accum, item) => {
    accum[item.skill] = item.skillvalue;
    return accum;
  }, {});

  ourObj.skills = Object.keys(skills).map(skill => ({ skill, skillvalue: skills[skill] }));

  var accounts = arr.reduce((accum, item) => {
    accum[item.socail_network] = item.link;
    return accum;
  }, {});

  ourObj.accounts = accounts;

  return ourObj;
};
