const searchFunctions = require('./../model/queries/search.js');

exports.getAll = (req, res, next) => {
  searchFunctions.searchAll(req.body.searchInput, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.render('searchResults.hbs', {activePage: { searchResults: true }, users: result[0]});
    }
  });
};
