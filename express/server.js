const Express = require("express");

const users = require("./users");

/**
 * Express App
 */
const app = Express();

app.get("/users", function(req, res) {
    var data = users;
    if(req.query.gender) {
        data = data.filter(function(user) {
            return user.gender == req.query.gender
        });
    }

    if(req.query.size) {
        data = data.slice(0, req.query.size);
    }

    const result = {
        count: data.length,
        data: data
    };

    res.send(result);
});

app.get("/users/:id", function(req, res) {
    const id = req.params.id;
    const user = users[id];

    if(!user) {
        res.status(404).send({message: "Not Found"});
    } else {
        res.send(users[id]);
    }

});

app.listen(8000, function() {
    console.log("Started");
});