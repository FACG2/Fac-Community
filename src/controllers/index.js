const express = require('express');
const router = express.Router();

const loginAuth = require('./login.js');
const authenticate = require('./authenticate');
const users = require('./users.js');
const home = require('./home.js');
const logout = require('./logout.js');
const profile = require('./profile.js');
const search = require('./search.js');

const basicInfo = require('./getBasicInfo.js');
const skills = require('./skills.js');

router.get('/', home.get);

router.post('/updateuser', users.update);
router.get('/basicinfo', basicInfo.get);
router.get('/auth/github', loginAuth.get);
router.get('/auth/github/callback', authenticate.get);
router.post('/skills', skills.post);
router.get('/logout', logout.get);
router.get('/login', (req, res, next) => {
  res.render('login', {title: 'Home', cssPath: '/css/login.css'});
});
router.get('/update', (req, res, next) => {
  res.render('update',
    {title: 'Update',
      cssPath: '/css/update.css',
      cssPath2: '/css/home.css'
    });
});

router.get('/profile', profile.getUserInfo);
router.get('/profile/:username', profile.getUserInfo);

router.get('/results', (req, res, next) => {
  res.render('results', {title: 'Results', cssPath: '/css/results.css'});
});

router.get('/search', search.getAll);

router.post('/updateuser', users.update);

router.get('/auth/github', loginAuth.get);
router.get('/auth/github/callback', authenticate.get);

module.exports = router;
