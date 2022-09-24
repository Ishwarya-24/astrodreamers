var mongoose = require('mongoose');

var LoginSchema = new mongoose.Schema(
    {
        "email": {
            type: String,
            required: true
        },
        "password": {
            type: String,
            required: true
        },
        
    }
);

var LoginModel = mongoose.model('login', LoginSchema);

module.exports = LoginModel;