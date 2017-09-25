const express = require('express');
const router = express.Router();

const loginAuth = require('./login.js');
const authenticate = require('./authenticate');
const users = require('./users.js');
const home = require('./home.js');
const logout = require('./logout.js');

router.get('/', home.get);

router.get('/login', (req, res, next) => {
  res.render('login', {title: 'Home', cssPath: '/css/login.css'});
});

router.get('/logout', logout.get);

router.get('/update', (req, res, next) => {
  res.render('update', {title: 'Update', cssPath: '/css/update.css'});
});

router.get('/profile', (req, res, next) => {
  res.render('profile', {
    title: 'profile',
    cssPath: '/css/profile.css',
    cssPath2: '/coz-css/bootstrap.mini.css',
    cssPath3: '/coz-css/bootstrap.max.css',
    cssPath4: '/coz-css/bootstrap.public.css'
  });
});

router.post('/updateuser', users.update);

router.get('/auth/github', loginAuth.get);
router.get('/auth/github/callback', authenticate.get);

module.exports = router;
