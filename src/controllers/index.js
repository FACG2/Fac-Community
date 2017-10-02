const express = require('express');
const router = express.Router();
const loginAuth = require('./login.js');
const authenticate = require('./authenticate');
const users = require('./users.js');
const home = require('./home.js');
const logout = require('./logout.js');
const profile = require('./profile.js');
const search = require('./search.js');
const editProfile = require('./editProfile.js');
const basicInfo = require('./getBasicInfo.js');
const skills = require('./skills.js');
const update = require('./update.js');
const signIn = require('./signIn');

router.get('/', home.get);

router.post('/updateuser', users.update);
router.get('/basicinfo', basicInfo.get);
router.get('/auth/github', loginAuth.get);
router.get('/auth/github/callback', authenticate.get);
router.post('/skills', skills.post);
router.get('/logout', logout.get);
router.post('/editprofileinfo', users.edit);
router.get('/editprofile', editProfile.get);
router.get('/login', signIn.get);
router.get('/update', update.get);
router.get('/profile', profile.get);
router.get('/profile/:username', profile.get);
router.get('/deleteskill/:skill', skills.delete);
router.get('/search', search.getAll);

module.exports = router;
