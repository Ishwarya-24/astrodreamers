var express = require('express');
var router = express.Router();

var ProductModel = require('../models/LoginModel.js');

// create
router.post(
    '/signin',          // http://localhost:3001/products/create
    function(req, res) {

        var newDocument = {
            "email": req.body.email,
            "password": req.body.password
            
        };

        LoginModel
        .create(newDocument)
        .then(
            function(dbDocument) {
                res.json(dbDocument);
            }
        )
        .catch(
            function(dbError) {
                console.log(dbError);
                res.send("Error occured /login/signin");
            }
        );
    }
);

module.exports = router;