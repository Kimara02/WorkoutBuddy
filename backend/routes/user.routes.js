const express = require('express');
const { loginUser, signup } = require('../controllers/userContoller');
const router = express.Router();

router.post('/login', loginUser)
router.post('/signup', signup)

module.exports =router