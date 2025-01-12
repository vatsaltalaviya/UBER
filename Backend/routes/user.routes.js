const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const {body} = require('express-validator');
const authMiddleware = require('../middleware/auth.middleware');


// create a route for registration of users

router.post("/register",[
    body('email').isEmail().withMessage('Inavalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be atleast 3 characters'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters'),
] , userController.registerUser)

router.post("/login",[
    body('email').isEmail().withMessage('Inavalid email'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters'),
], userController.loginUser);

router.get("/profile", authMiddleware.authUser ,userController.getUserProfile);

router.get("/logout", authMiddleware.authUser, userController.logout);

module.exports = router;