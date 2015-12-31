var express = require("express");

var app = express();

app.get("/api/whoami", function(req, res) {
    var rsp = {};

    var ip = req.headers['x-forwarded-for'];
    var os = req.headers["user-agent"].match(/\(.+?\)/)[0];
    var lng = req.headers["accept-language"].split(",")[0];

    rsp.ipadress = ip
    rsp.language = lng;
    rsp.software = os.substring(1, os.length - 1)
    res.send(JSON.stringify(rsp));
})

var port = process.env.PORT || 3000;
app.listen(port, function() {

    console.log("Listening at port " + port);
})