
module.exports = function(req, res) {
    res.setHeader("Content-Type", "text/json");
    const data = {"name": "emre"};

    res.end(JSON.stringify(data));
}