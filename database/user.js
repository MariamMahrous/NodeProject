let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [5, 'too short'],
        maxlength: 15,
    },
    email: String,
    password: String,
    tokens:[
        {
            token:{
                type:String,
                required:true
            }

    }]

    
})



module.exports = userSchema;