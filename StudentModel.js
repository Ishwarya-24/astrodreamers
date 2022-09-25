var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema(
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

var StudentModel = mongoose.model('login', StudentSchema);

module.exports = StudentModel;