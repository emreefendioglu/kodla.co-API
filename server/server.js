const http = require('http');

const fileHandler = require('./file-handler');
const htmlHandler = require('./html-handler');
const jsonHandler = require('./json-handler');
const uploadHandler = require('./upload-handler');

/**
 * https://nodejs.dev/learn/get-http-request-body-data-using-nodejs
 */

/**
 * Configurations
 */
const port = 8000;

/*
const handler = function(req, res) {
    res.write("test")
    res.end()
}
*/

function router(req, res) {
    console.log(req.url);

    if(req.url.match("^/file")) {
        fileHandler(req, res);
    } else if(req.url.match("^/upload")) {
        uploadHandler(req, res);
    } else if(req.url.match("^/json")) {
        jsonHandler(req, res);
    } else {
        htmlHandler(req, res);
    }
}

const server = http.createServer(router);

server.listen(port);