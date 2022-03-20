const express = require('express');
const router = express.Router();
const { signUp,signIn } = require('../controllers/UserController')

router.route('/sign-up')
    .post(signUp)

router.route('/sign-in')
    .post(signIn)
module.exports = router