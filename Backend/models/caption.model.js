const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captionSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlenght:[3 , "fiest name must be atleast 3 characters"]
        },
        lastname:{
            type:String,
            minlenght:[3 , "last name must be atleast 3 characters"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match: [/^\S+@\S+\.\S+$/, 'please enter a valid email address']
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    soketId:{
        type:String,
    },
    status:{
        type:String,
        enum:['active', 'inactive'],
        default:'inactive',
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlenght:[3,'color must be at least 3 characters']
        },
        plate:{
            type:String,
            required:true,
            minlenght:[3,'plate must be at least 3 characters'],
            
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,"capacity must be altest 1"],
            
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car', 'auto', 'motorcycle']
        }
    },
    locations:{
        lat:{
            type:Number
        },
        lng:{
            type:Number
        }
    }

});


captionSchema.methods.GenerateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
    return token;
 
}

captionSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password, this.password);
}

captionSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}
const captionModel = mongoose.model('caption', captionSchema);

module.exports = captionModel;