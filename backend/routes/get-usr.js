var crypto = require('crypto');
var express = require('express');
var router = express.Router();
const {spawn} = require('child_process');
require('dotenv').config();

router.get('/', function(req, res, next) {

    var dataToSend;
    const python = spawn('python',  ['./python/getMultipleUsers.py', process.env.MONGO_URL, req.body.post]);
    
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        console.log(dataToSend)
    });
    
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        console.log(dataToSend)
        res.send(dataToSend)
        
        console.log(dataToSend)
       
    });
});

module.exports = router;
