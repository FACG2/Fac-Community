const searchFunctions = require('./../model/queries/search.js');

exports.getAll = (req, res, next) => {
  searchFunctions.searchAll(req.body.searchInput, (err, results) => {
    if (err) {
      next(err);
    } else {
      console.log(results);
      res.end();
    }
  });
};
