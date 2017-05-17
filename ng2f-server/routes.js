var auth = require('./auth'),
  events = require('./controllers/eventController'),
  users = require('./controllers/userController');
  path = require('path');

var db = require('./service/databaseConnection');

var fs = require('fs');
var qs = require('querystring');


module.exports = function(app) {

  //Galerry and image routes::
  app.post('/api/saveCanvasImage',db.saveNewImage);
  app.post('/api/deleteCanvasImage',db.deleteImage);
  app.get('/api/getLastImages',db.getLastImages);
  app.get('/api/getAllImages',db.getAllImages);

  //userManipulationAPI

  app.post('/api/login', auth.authenticate);
  app.get('/api/currentIdentity', auth.getCurrentIdentity);
  app.post('/api/changeSettings', db.updateUserInfo);

  app.put('/api/users/:id', users.updateUser);
  
  // app.get('/api/events', events.getEvents);
  // app.get('/api/events/:eventId', events.getEvent);
  // app.post('/api/events', events.saveEvent);
  // app.get('/api/sessions/search', events.searchSessions);
  // app.delete('/api/events/:eventId/sessions/:sessionId/voters/:voterId', events.deleteVoter);
  // app.post('/api/events/:eventId/sessions/:sessionId/voters/:voterId', events.addVoter);
  
  app.get('/api/logout', function(req, res) {
    req.logout();
    res.end();
  });


  app.get('/app/*', function(req, res) {
    res.sendStatus(404);
  });
  
  app.get('/node_modules/*', function(req, res) {
    res.sendStatus(404);
  });

  app.get('/events/*', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
  });
  app.get('/user/*', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
  });
  app.get('/404', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
  });

  //Custom paths
    app.get('/landingPage', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
  });
      app.get('/home', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
   });
      app.get('/pictures', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
   });
  
  app.get('*', function(req, res) {
    console.log('404 error', req.path);
    res.sendStatus(404);
  });
}


// route middleware to make sure
function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();
	// if they aren't redirect them to the home page
	res.send({error:"You are not logged in"});
}