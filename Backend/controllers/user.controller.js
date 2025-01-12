const userModel  = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const BlacklistTokenModel = require('../models/blacklistToken.model');


// Create a new user with provided data. If any required fields are missing, throw an error.
module.exports.registerUser = async (req , res , next)=>{

    // validate the input data using express-validator
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({ errors: error.array() });
    }

    //get the data from req.body || frontend
    const {fullname, email , password} = req.body;

    // check if user exists in the database
    isUserAlreadyRegistered = await userModel.findOne({ email});
    if(isUserAlreadyRegistered){
        return res.status(400).json({ message: 'User already exists' });
    }

    // create a hash password 
   const hashedPassword = await userModel.hashPassword(password);
    

    // create a new user in the database using the hashed password
    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword
    });
    //generate a token for the user and send the status message
    const token = user.generateAuthToken();

    res.status(201).json({user, token});
}


// login the user if the user already exists
module.exports.loginUser = async (req , res , next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({ errors: error.array() });
    }

    //get the data from req.body || frontend
    const {email, password} = req.body;
    
    // check if user exists in the database
    const user = await userModel.findOne({email}).select('+password');
    if(!user){
        return res.status(401).json({message: 'Invalid credentials'});
    }

    // check if password is correct
    const isMatched = await user.comparePassword(password);
    if(!isMatched){
        return res.status(401).json({message: 'Invalid credentials'});
    }

    // generate a token for the user and send the status message
    const token = user.generateAuthToken();

    // set the token in a cookie for future requests
    res.cookie('token', token)

    // send the user data and token
    res.status(200).json({user , token});
}


// get user profile by user id
module.exports.getUserProfile = async function(req , res, next){
    res.status(200).json(req.user);
}

module.exports.logout = async function(req , res, next){
    // clear the token from the cookie
    res.clearCookie('token');

    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    await BlacklistTokenModel.create({token});
    res.status(200).json({message: 'logout user'});
}