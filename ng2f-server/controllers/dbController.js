// Retrieve
var MongoClient = require('mongodb').MongoClient;
var formidable = require("formidable");
var fs = require('fs');
var ObjectID = require("mongodb").ObjectID;

var imgs = require('../save-image');

var mongoose = require('mongoose');



// Connect to the db
var connectionString = "mongodb://user:user@ds041924.mongolab.com:41924/testbase";

exports.saveNewImage = function(req,res){
        
    var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
        try{
             var fileName = imgs.saveImage(fields.canvImage,res);
             //console.log(fields.canvImageAttributes);
             var canvImageAttributes = JSON.parse(fields.canvImageAttributes);
             canvImageAttributes.imageUrl = fileName;

             //Saving to database
             
             
                 MongoClient.connect(connectionString, function(err, db) {
                if(!err) {
                    //console.log("We are connected");
                    
                    var collection = db.collection('images');
                    
                    collection.insert(canvImageAttributes, {w:1}, function(err, result) {
                        //console.log(result);
                    }); 
                }
                });
                }
                catch(err){
                res.send({status:false});
                }
});

    
}
exports.deleteImage = function(req,res){
        MongoClient.connect(connectionString, function(err, db) {
  if(!err) {
    //console.log("We are connected");
    
    var collection = db.collection('images');
    
     //   var form = new formidable.IncomingForm();
      //  form.parse(req, function (err, fields) {
          //console.log(req.body._id);
           //var canvImageAttributes = JSON.parse(req.body);//JSON.parse(fields.canvImageAttributes);
           

    collection.remove({_id:ObjectID(req.body._id)}, {w:1}, function(err, result) {
       // //console.log(result);
        if(!err) {
            //delete file here
                var deletePath = path.resolve(__dirname + '/../../app/assets/images/gallery/'
                + req.body.imageUrl);
            try{
            fs.unlinkSync(deletePath);
            res.send({status:true});
                }
            catch(err){
            res.send({status:false});
                }

        }
        else{
            res.send({status:false});
        }
    });//end collections
   // });//end form.parse
    //collection.remove();
        
    }
});
}

//no use yet

exports.findImage = function(url){
 MongoClient.connect(connectionString, function(err, db) {
  if(!err) {
    //console.log("We are connected");
    
    var collection = db.collection('images');
    collection.find().toArray(function(err, items) {
        //console.log(items);
    });
        
    }
});
}

exports.findByDate = function(from,to){
  MongoClient.connect(connectionString, function(err, db) {
    var collection = db.collection('images');
    var cursor = collection.find({
    //  imageDate: {"$gte": new Date("2012-01-10T00:00:00.000Z") , "$lt": new Date("2017-03-13T16:17:36.470Z") }}).toArray(
      imageDate: {"$gte": new Date("2012-01-01") , "$lt": new Date("2017-03-13") }}).toArray(
          function(err, items) {
              //console.log(items);
          });
});
    
}

exports.updateImage = function(imageAttribute,newValues){
  MongoClient.connect(connectionString, function(err, db) {
  if(!err) {
    //console.log("We are connected");
    
    var collection = db.collection('images');
        collection.update(imageAttribute, {$set:newValues}, {w:1}, function(err, result) {
            //console.log(result);
        });
    }
});
}

exports.getLastImages= function(req,res){
  MongoClient.connect(connectionString, function(err, db) {
  if(!err) {
    //console.log("We are connected");
    
    var collection = db.collection('images');
    collection.find().sort({'imageDate':-1}).limit(4).toArray(function(err, items) {
        //console.log(items);
        res.send(items);
    });
        
    }
});


}

exports.getAllImages= function(req,res){
  MongoClient.connect(connectionString, function(err, db) {
  if(!err) {
    //console.log("We are connected");
    
    var collection = db.collection('images');
    collection.find().sort({'imageDate':-1}).toArray(function(err, items) {
        //console.log(items);
        res.send(items);
    });
        
    }
});

}
exports.changeImageDetails = function(req,res){
      MongoClient.connect(connectionString, function(err, db) {
  if(!err) {
    //console.log("We are connected");
    
    var collection = db.collection('images');
    
    
    delete req.body._id;
    
   // console.log(req.body);
    
        collection.update({imageUrl:req.body.imageUrl}, {$set:req.body}, {w:1}, function(err, result) {
            if(err){
                console.log('Error');
                console.log(err);
                res.send({info:false});
            }
            else{
            console.log('Updating Image Information');
          //  console.log(result);
            res.send({info:true});
            
            }
        });
        
    }
});
}


//MANIPULATING USER DATA HERE

exports.findUserByUsername = function(user,done){
 MongoClient.connect(connectionString, function(err, db) {
  if(!err) {
    //console.log("We are connected");
    var userName = user.userName;
    var collection = db.collection('users');

    collection.findOne({userName:userName}, function(err, item) {
     // //console.log(item);

           if(item) {
        return done(null, item);  
      } else {
        return done(null, false);
      }
    });
        
    }
});
}

exports.findUserById = function(id,done){
 MongoClient.connect(connectionString, function(err, db) {
  if(!err) {
    //console.log("We are connected - findUserById");
    var collection = db.collection('users');

    collection.findOne({id:id}, function(err, item) {
        //console.log("Item is: "+ item);
          if(item) {
      return done(null, item);  
    } else {
      return done(null, false);
    }
    });
    }
});
}


exports.updateUserInfo = function(req,res){
  MongoClient.connect(connectionString, function(err, db) {
  if(!err) {
    console.log("UpdateUserInfo - id - "+req.body.id);
    delete req.body._id;
    console.log(req.body);
    var collection = db.collection('users');
        collection.update({id:req.body.id}, {$set:req.body}, {w:1}, function(err, result) {
            if(err){
                console.log('Error');
                console.log(err);
                res.send({info:false});
            }
            else{
            console.log('Updating User Information');
            res.send({info:true});
            }
        });
    }
});
}