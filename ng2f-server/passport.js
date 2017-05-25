var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
  var db = require('./service/databaseConnection');

var userModel = require('./database/userModel');
  
  
module.exports = function() {
  passport.use(new LocalStrategy(
    function(username, password, done) {
      
      //var searchFor = {userName:username,
       //               password:password};
      //console.log('Debug2-'+searchFor.userName + "ppwd" + searchFor.password);

     //return db.findUserByUsername(searchFor,done);
     
             userModel.findOne({ 'userName' :  username }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, false); // req.flash is the way to set flashdata using connect-flash

            // if the user is found but the password is wrong
            //if (!user.validPassword(password))
              //  return done(null, false); // create the loginMessage and save it to session as flashdata

            // all is well, return successful user
            return done(null, user);
        });
     
     
     
      
    }
  ));

  passport.serializeUser(function(user, done) {
    // console.log(5, user);
    if(user) {
      done(null, user.id);
    }
  });

  passport.deserializeUser(function(id, done) {

        // userModel.findById(id, function(err, user) {
        //     done(err, user);
        // });
        userModel.findOne({ 'id' :  id }, function(err, user) {
          done(err, user);
        });

     // return db.findUserById(id,done);



  });

}