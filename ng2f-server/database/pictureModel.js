
// Connectiong t othe database
var mongoose = require('mongoose');


var Schema = mongoose.Schema;


var pictureSchema = new Schema(
  {
        imageUrl:String,
        imageDate: Date,
        madeBy:String,
        favourite:Boolean,
        title:String,
        comment:String
}
);

// the schema is useless so far
// we need to create a model using it
var picture = mongoose.model('picture', pictureSchema);

// make this available to our users in our Node applications
module.exports = picture;