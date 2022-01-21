const Express = require("express");

const users = require("./users");

/**
 * Express App
 */
const app = Express();

app.use("/pictures", Express.static(__dirname+"/pictures"));

app.get("/users/", function(req, res) {
    var data = users;
    if(req.query.gender) {
        data = data.filter(user => user.gender === req.query.gender)
    }

    const result = {
        count: data.length,
        filter: req.query,
        users: data
    }

    res
        .status(200)
        .send(result)
});

app.get("/users/:id([0-9]+)", function(req, res) {
    const result = users[req.params.id];

    if(!result)
        res
            .status(404)
            .send({message: "not-found"})

    res
        .status(200)
        .send(result)
});

app.listen(8000, function() {
    console.log("Started");
});