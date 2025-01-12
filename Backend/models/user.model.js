const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlenght:[3 , "fiest name must be atleast 3 characters"]
        },
        lastname:{
            type:String,
            required:true,
            minlenght:[3 , "last name must be atleast 3 characters"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlenght:[6 , "email must be atleast 6 characters"]
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    soketId:{
        type:String,
    }

});

// craete a methods for users
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;