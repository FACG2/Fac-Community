// const express = require('express');
// const router = express.Router();
// const queries = require('./../queries');

// router.get('/facsters', (req, res, next) =>
//   queries
//     .getAll()
//     .then(users => res.status(200).json(users))
//     .catch(err => next(err))
// );

// router.get('/facsters/:name', ({ params: { name } }, res, next) => {
//   queries
//     .getSingleFacster(name)
//     .then(person => res.status(200).json(person))
//     .catch(err => next(err));
// });

// router.post('/facster/new', ({ body }, res, next) => {
//   queries
//     .addFacster(body)
//     .then(userID => queries.getFacsterById(userID))
//     .then(user => res.status(201).json(user))
//     .catch(err => next(err));
// });

// router.get('/facsters/:name/hobby', ({ params: { name }, body }, res, next) => {
//   queries
//     .getFacsterHobby(name)
//     .then(facsterAndHobby => res.status(200).json(facsterAndHobby))
//     .catch(err => next(err));
// });

// router.get(
//   '/facsters/:name/superpower',
//   ({ params: { name }, body }, res, next) => {
//     queries
//       .getFacsterSuperpower(name)
//       .then(facsterAndPower => res.status(200).json(facsterAndPower))
//       .catch(err => next(err));
//   }
// );

// module.exports = router;


const notes = require('./../model/queries/notes.js');


exports.notes = (req, res , next) => {
  notes.getNotes(req.params.userId, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.render('notes.hbs', { activePage: { notes: true }, notes: result, userId: req.params.userId});
    }
  });
}

exports.addNote = (req, res) => {
  res.render('addNote.hbs', {reciever_Id: req.params.reciever_Id});
};

 exports.submitAddNote = (req, res, next) => {
  notes.addNote(req.params.reciever_id, req.body.content, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.redirect(`/notes/${req.params.reciever_id}`);
    }
  });
};


