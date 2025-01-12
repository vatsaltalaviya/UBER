const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const {body} = require('express-validator');


router.post("/register",[
    body('email').isEmail().withMessage('Inavalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be atleast 3 characters'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters'),
] , userController.registerUser)



module.exports = router;