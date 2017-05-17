var fs = require('fs');
var path = require('path');

exports.saveImage = function (dataUrl,res) {
    console.log('start');
    
   // var matches = dataUrl.match(/^data:.+\/(.+);base64,(.*)$/);
   // var buffer = new Buffer(matches[2], 'base64');
   
    var data = dataUrl.replace(/^data:image\/\w+;base64,/, "");
    var buffer = new Buffer(data, 'base64');

    var fileName = Math.floor(Math.random() * 1000000) + '.png';
    var savePath = path.resolve(__dirname + '/../app/assets/images/gallery/'
        + fileName);
    fs.writeFileSync(savePath, buffer);
    
    res.send({status:true,
              fileName:fileName})
    console.log('finish');     
    return fileName;
};


//../../app/assets/images/gallery/