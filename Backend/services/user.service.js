const userModel = require('../models/user.model');


// Create a new user with provided data. If any required fields are missing, throw an error.
module.exports.createUser = async ({
    firstname , lastname, email, password
})=>{
    if(!firstname || !email || !password){
        throw new Error('All fields are required');
    }
//create a new user in the database 
    
    const user = userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })

    return user;
}