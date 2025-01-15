const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const authMiddleware = require('../middleware/auth.middleware');
const captionController = require('../controllers/caption.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Inavalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be atleast 3 characters'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters'),
    body('vehicle.color').isLength({min:3}).withMessage('color must be atleast 3 characters'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate must be atleast 3 characters'),
    body('vehicle.capacity').isInt({min:1}).withMessage('capacity must be atleast 1'),
    body('vehicle.vehicleType').isIn(['Car', 'Auto', 'Motorcycle']).withMessage('invalid vehicle type'),
], captionController.registerCaption)

router.post('/login',[
    body('email').isEmail().withMessage('Inavalid email'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters'),
], captionController.loginCaption)

router.get('/profile', authMiddleware.authCaption ,captionController.getCaptionProfile);

router.get('/logout', authMiddleware.authCaption, captionController.getCaptionlogout);

module.exports = router