const captionModel = require('../models/caption.model');

module.exports.createCaption = async ({
    firstname , lastname , email , password , color , plate , capacity , vehicleType
})=>{
    // validate inputs
    if(!firstname || !email ||!password ||!color ||!plate ||!capacity ||!vehicleType){
        throw new Error('All fields are required');
    }

    const caption = await captionModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
        color,
        plate,
        capacity,
        vehicleType
       }
    })
    return caption;
}