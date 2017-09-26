const searchFunctions = require('./../model/queries/search.js');

exports.getAll = (req, res, next) => {
  console.log(req.query.search);
  searchFunctions.searchAll(req.query.search, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.render('results', {users: result, user: req.user, cssPath: '/css/results.css', title: 'Results'});
    }
  });
};
