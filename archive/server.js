// Generated by CoffeeScript 1.9.3
(function() {
  var app, express, fs, index, server, tag;

  tag = "app/server/server:%s =>";

  express = require("express");

  fs = require("fs");

  index = fs.readFileSync("./ui/index.html", {
    encoding: "utf8"
  });

  app = express();

  app.use(express["static"]("ui"));

  app.get("*", function(req, res) {
    res.send(index);
    return res.end();
  });

  server = app.listen(2000, function() {
    var host, port;
    host = server.address().address;
    port = server.address().port;
    return console.log(tag, "stats", "listening at: " + host + ":" + port);
  });

}).call(this);
