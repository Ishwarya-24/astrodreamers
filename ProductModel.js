var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema(
    {
        "course": {
            type: String,
            required: true
        },
        "duration": {
            type: String,
            required: true
        },
        "price": {
            type: Number,
            required: true
        },
        "dateofjoining":{
            type: Date,
            required: true
        },


        "availability": {
            type: Boolean,
            required: false,
            default: true
        },
        "date_created": {
            type: Date,
            required: true,
            default: Date.now
        }
    }
);

var ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;