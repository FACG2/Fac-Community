const searchFunctions = require('./../model/queries/search.js');

exports.getAll = (req, res, next) => {
  searchFunctions.getUserInfo(req.body.searchInput, (err, result) => {
    if (err) {
      next(err);
    } else {
      console.log(result);
      res.render('results.hbs', {activePage: { results: true }, cssPath: '/css/results.css', users: result[0]});
    }
  });
};
