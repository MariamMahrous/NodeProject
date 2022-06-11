

let mongoose = require('mongoose');

let cardSchema = new mongoose.Shema({
    price:Number,
    quantity:Number,
    is_available:Boolean,
    expired_date: Date,
    product_id:{
        type: mongoose.Schema.type.objectID,
        require: true,
        ref:'product'
    }
})
module.exports = cardSchema;
