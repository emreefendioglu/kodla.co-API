
module.exports = function(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.end(`
    <html>
        <head>
            <link rel="icon" href="data:;base64,iVBORw0KGgo=">
        </head>
        <body style="background-color: red">
            <img style="width: 100%;" src="/file" />
        </body>
    </html>
    `);
}