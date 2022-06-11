let mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    quantity: Number,
    is_available: Boolean,
    expired_date: Date,
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'categorys'
    }
})

module.exports = productSchema;