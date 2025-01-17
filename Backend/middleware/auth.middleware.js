const userModel = require('../models/user.model');
const captionModel = require('../models/caption.model');
const blacklistModel = require('../models/blacklistToken.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.authUser = async (req, res ,next)=>{

    // get the token from the request header or cookies
    const token =  req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await blacklistModel.findOne({token: token});

    if(isBlacklisted){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try{
        // decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;

        return next();
    }
    catch(error){
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports.authCaption = async (req , res , next)=> {
    
    // get the token from the request header or cookies
    const token =  req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    
    const isBlacklisted = await blacklistModel.findOne({token: token});

    if(isBlacklisted){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try{
        // decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const caption = await captionModel.findById(decoded._id);

        req.caption = caption;

        return next();
    }
    catch(error){
        return res.status(401).json({ message: 'Invalid token' });
    }
};