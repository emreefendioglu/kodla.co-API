const Express = require("express");

const users = require("./users");

/**
 * Express App
 */
const app = Express();
app.use(Express.json());

app.get("/users/", function(req, res) {
    var data = users.filter(function(user) { return !!user; });
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

app.post("/users/", function(req, res) {
    users.push(req.body);
    res.send({message: "User Added"});
});

app.put("/users/:id", function(req, res) {
    const id = req.params.id;
    users[id] = req.body;

    res.send({message: "User Updated"});
});

app.patch("/users/:id", function(req, res) {
    const id = req.params.id;
    const user = users[id];

    users[id] = Object.assign(user, req.body);

    res.send({message: "User Updated"});
});

app.delete("/users/:id", function(req, res) {
    const id = req.params.id;

    delete users[id];

    res.send({message: "User deleted"});
});

app.listen(8000, function() {
    console.log("Started");
});