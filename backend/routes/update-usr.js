var crypto = require('crypto');
var express = require('express');
var router = express.Router();
const {spawn} = require('child_process');
require('dotenv').config();

router.post('/', function(req, res, next) {

    
    if (req.body.post.newVals.pass !== "")
      req.body.post.newVals.pass = crypto.createHash('md5').update(req.body.post.newVals.pass).digest('hex');
    else {
      req.body.post.newVals = {
        email: req.body.post.newVals.email,
        name: req.body.post.newVals.name,
        role: req.body.post.newVals.role
      }
    }
    jstr = JSON.stringify(req.body.post);
    console.log(jstr);
    var dataToSend;
    const python = spawn('python',  ['./python/upusr.py', process.env.MONGO_URL, jstr]);
    
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        console.log(dataToSend)
    });
    
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);

        res.send(dataToSend);
    });
});

module.exports = router;
