var express = require('express');
var bodyParser = require('body-parser');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var  port = process.env.PORT || 8808

var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://user:user@ds041924.mongolab.com:41924/testbase');



require('./expressConfig')(app);

require('./passport')();

require('./routes')(app);

app.listen(port);
console.log('Listening on port ' + port + '...');