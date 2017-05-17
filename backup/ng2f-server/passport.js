var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
  var db = require('./service/databaseConnection'),
  users = require('./database/users');
  
  
module.exports = function() {
  passport.use(new LocalStrategy(
    function(username, password, done) {
      
      var searchFor = {userName:username,
                      password:password};
      //console.log('Debug2-'+searchFor.userName + "ppwd" + searchFor.password);

      return db.findUserByUsername(searchFor,done);
      
    }
  ));

  passport.serializeUser(function(user, done) {
    // console.log(5, user);
    if(user) {
      done(null, user.id);
    }
  });

  passport.deserializeUser(function(id, done) {
    // console.log(3, id);

      console.log('Debug1-'+id);


      return db.findUserById(id,done);

    // var found = users.find(user => {
    //   return user.id === id;
    // })
    //           if(found) {
    //   return done(null, found);  
    // } else {
    //   return done(null, false);
    // }

  });

}