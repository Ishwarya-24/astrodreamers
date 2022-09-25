var express = require('express');
var router = express.Router();

var StudentModel = require('../models/StudentModel.js');

// create
router.post(
    '/login',          // http://localhost:3001/products/create
    function(req, res) {

        var newDocument = {
            "email": req.body.email,
            "password": req.body.password

        };

        StudentModel
        .create(newDocument)
        .then(
            function(dbDocument) {
                res.json(dbDocument);
            }
        )
        .catch(
            function(dbError) {
                console.log(dbError);
                res.send("Error occured /students/login");
            }
        );
    }
);

module.exports = router;