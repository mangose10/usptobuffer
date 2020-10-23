var crypto = require('crypto');
var express = require('express');
var router = express.Router();
require('dotenv').config();

router.get('/', function(req, res, next) {

    req.session.auth = "false"
    res.send('logged out')  
});

module.exports = router;
