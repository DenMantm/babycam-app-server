fs = require('fs');

exports.saveImage = function (dataUrl,res) {
    var matches = dataUrl.match(/^data:.+\/(.+);base64,(.*)$/);
    var buffer = new Buffer(matches[2], 'base64');

    var fileName = Math.floor(Math.random() * 1000000) + '.png';
    var savePath = path.resolve(__dirname + '/../../app/assets/images/gallery/'
        + fileName);
    fs.writeFileSync(savePath, buffer);
    
    res.send({status:true,
              fileName:fileName})
    return fileName;
};


//../../app/assets/images/gallery/