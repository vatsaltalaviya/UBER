const captionModel = require('../models/caption.model')
const captionService = require('../services/caption.service');
const {validationResult} = require('express-validator');
const BlacklistModel = require('../models/blacklistToken.model')



module.exports.registerCaption = async (req, res, next) => {
    // validate the input data using express-validator
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    // get the data from req.body || frontend
    const { fullname , email , password ,vehicle } = req.body;

    // check if the caption already exists in the database by the email
    const isCaptionAlreadyExist = await captionModel.findOne({email});

    if(isCaptionAlreadyExist){
        return res.status(400).json({ message: 'Email already exists' });
    }

    // hash the password before storing it in the database
    const hashedPassword = await captionModel.hashPassword(password);

    // create a new caption with the hashed password
    const caption = await captionService.createCaption({
        firstname : fullname.firstname,
        lastname : fullname.lastname,
        email,
        password : hashedPassword,
        color : vehicle.color,
        plate : vehicle.plate,
        capacity : vehicle.capacity,
        vehicleType : vehicle.vehicleType,

    })

    // generate a token for the caption and send the status message
    const token = caption.GenerateAuthToken();
    res.status(201).json({caption, token});

}

module.exports.loginCaption = async (req, res, next) => {
    // validate the input data using express-validator
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    
    // get the data from req.body || frontend
    const { email, password } = req.body;
    
    // find the caption by email in the database
    const caption = await captionModel.findOne({email}).select('+password');
    
    // check if the caption exists
    if(!caption){
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // check if the password is correct
    const isMatched = await caption.comparePassword(password);
    
    if(!isMatched){
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // generate a token for the caption and send the status message
    const token = caption.GenerateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ caption, token });
}

module.exports.getCaptionProfile = async (req, res, next) => {
    res.status(200).json({caption : req.caption});
}

module.exports.getCaptionlogout = async (req, res, next) => {
   
   // Get the token from cookie or headers
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    res.clearCookie('token');

    await BlacklistModel.create({token});
    res.status(200).json({message: 'logout Caption'});
}