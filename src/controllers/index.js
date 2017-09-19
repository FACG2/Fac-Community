const express = require('express');
const router = express.Router();

const loginAuth = require('./login.js');
const authenticate = require('./authenticate');

router.get('/', (req, res, next) => {
  res.render('home');
});

router.get('/login', (req, res, next) => {
  res.render('login');
});

router.get('/auth/github', loginAuth.get);
router.get('/auth/github/callback', authenticate.get);

module.exports = router;
