const fs = require("fs")
/**
 * https://nodejs.dev/learn/get-http-request-body-data-using-nodejs
 */

module.exports = function(req, res) {
    var data = [];
    req.on("data", function(chunk) {
        data.push(chunk);
    });

    req.on("end", function() {
        const buffer = new Buffer.concat(data);
        fs.writeFileSync(__dirname+"/test.jpeg", buffer);
        res.write("Ok");
        res.end();
    });
}