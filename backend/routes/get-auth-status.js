var crypto = require('crypto');
var express = require('express');
var router = express.Router();
require('dotenv').config();

router.get('/', function(req, res, next) {

    console.log('Cookies: ', req.session);
    res.send(req.session.auth)  
});

module.exports = router;
