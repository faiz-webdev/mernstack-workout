const express = require('express');

const router = express.Router();
const {loginUser, signupUser } = require('../controllers/userController')

//login route
router.post('/login', loginUser)

//sigmup route
router.post('/signup', signupUser)

module.exports = router;