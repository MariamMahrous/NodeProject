

let mongoose = require('mongoose');
let profileSchema = new mongoose.Schema({

    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    website:{
        type: String
    },
    location:
    {
        type:string
    }
    
})



module.exports = profileSchema;