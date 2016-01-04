var redis = require('./redis');
var redisClient = redis.redisClient
var app = require(__dirname + '/../server').app
var express = require(__dirname + '/../server').express
var Asewo = require('./lib/asewo')
var router = express.Router();
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var querystring = require('querystring');
var P = require('bluebird');

var sess = {
  store: redisClient.cacheSessionStore,
  secret: 'useraccount',
  cookie: {
    expires: false,
    maxAge: 1440
  }
}
app.use(session(sess))
var jsonParser = bodyParser.json({ type: 'application/json' } );

// Router middleware
// Protective middleware to validate access token
app.use(function(req, res, next) {
    
})

app.post('/buy', jsonParser, function(req, res) {
  
})

app.post('/sell', jsonParser, function(req, res) {
  
})