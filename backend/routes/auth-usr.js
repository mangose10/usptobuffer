var crypto = require('crypto');
var express = require('express');
var router = express.Router();
const {spawn} = require('child_process');
const { response } = require('../server');
require('dotenv').config();

router.post('/', function(req, res, next) {

    var dataToSend;
    console.log(req.body.post)
    const python = spawn('python',  ['./python/getusr.py', process.env.MONGO_URL, req.body.post.email]);
    
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
    });
    
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);

        var hash = crypto.createHash('md5').update(req.body.post.pass).digest('hex');
        var jData = JSON.parse(dataToSend);
        if (jData.express.pass === hash){
            var safeData = {
                'name' : jData.express.name,
                'role' : jData.express.role,
                'email': req.body.post.email,
                'auth' : true
            }
            req.session.auth = safeData;
            /*res.cookie('aCookie', safeData,{
                maxAge: 60*60*1000,
                httpOnly: true,
                secure: true,
                sameSite: true
            }).send("true")*/

            res.send("true");
        }else{
            res.send("false");
        }
    });
});

module.exports = router;
