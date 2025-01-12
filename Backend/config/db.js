const mongoose = require('mongoose');

function connecttoDb(){
    mongoose.connect(process.env.DB_CONNECT, ).then(()=>{console.log('Connected to DB')})
    .catch(()=>{console.log('Error connecting to DB')})
   
}

module.exports = connecttoDb;