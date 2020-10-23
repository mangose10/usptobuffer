var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var patRouter = require('./routes/get-pat-data');
var mkUsrRouter = require('./routes/make-usr');
var dlUsrRouter = require('./routes/del-user');
var vwUsrRouter = require('./routes/get-usr');
var upUsrRouter = require('./routes/update-usr');
var atUsrRouter = require('./routes/auth-usr');
var atStRouter = require('./routes/get-auth-status');
var loUsrRouter = require('./routes/usr-logout');
var labelRouter = require('./routes/label-response')

const app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.set('trust proxy', 1)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret:"testing"}))
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/get-pat-data', patRouter);
app.use('/api/del-usr', dlUsrRouter);
app.use('/api/view-usr', vwUsrRouter);
app.use('/api/update-usr', upUsrRouter);
app.use('/api/make-usr', mkUsrRouter);
app.use('/auth/auth-usr', atUsrRouter);
app.use('/auth/get-auth-status', atStRouter);
app.use('/auth/usr-logout', loUsrRouter);
app.use('/api/label-response', labelRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;