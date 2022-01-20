const Express = require("express");

const app = Express();

app.all("/", function(req, res) {
    res
        .status(200)
        .send({});
});

app.listen(8000, function() {
    console.log("Started");
});