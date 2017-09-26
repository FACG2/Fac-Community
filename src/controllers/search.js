const searchFunctions = require('./../model/queries/search.js');

exports.getAll = (req, res, next) => {
  searchFunctions.searchAll(req.query.search, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.render('results',
        {
          users: result,
          cssPath: '/css/results.css',
          cssPath2: '/css/home.css',
          title: 'Results',
          user:req.user,
        });
    }
  });
};
