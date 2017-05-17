var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var  port = process.env.PORT || 8808

var app = express();



require('./expressConfig')(app);

require('./passport')(passport);

require('./routes')(app,passport);

app.listen(port);
console.log('Listening on port ' + port + '...');