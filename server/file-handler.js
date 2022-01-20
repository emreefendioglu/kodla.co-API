const fs = require("fs")
module.exports = function(req, res) {
    //const stream = fs.createReadStream(__dirname+"/cat.jpeg");
    const file = fs.readFileSync(__dirname+"/cat.jpeg");

    // stream.on("open", function(){
    //     res.setHeader("Content-Type", "image/jpeg");
    //     stream.pipe(res);
    // });

    const data = new Buffer.from(file.buffer);
    res.write(data, 'binary');
    res.end();
}