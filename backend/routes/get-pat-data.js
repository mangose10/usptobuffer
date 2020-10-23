var express = require('express');
var router = express.Router();
const {spawn} = require('child_process');
require('dotenv').config();

router.get('/', function(req, res, next) {

  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn('python',  ['./python/getid.py', process.env.MONGO_URL]);
  // collect data from script
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend)
  });
  
});

module.exports = router;
