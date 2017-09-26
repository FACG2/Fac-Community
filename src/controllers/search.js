const searchFunctions = require('./../model/queries/search.js');

exports.getAll = (req, res, next) => {
  searchFunctions.searchAll(req.query.searchInput, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.render('results', {users: result[0]});
    }
  });
};
