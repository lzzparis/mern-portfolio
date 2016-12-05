var express = require('express');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var config = require("./config");

var app = express();

app.use(bodyParser.json());

app.use(express.static(process.env.CLIENT_PATH || "build/dev/client/"));

app.get("/", function(req, res) {
  console.log("hit");
  res.status(200).json({message: "Hello world"});
});

var runServer = function(callback) {
  console.log("DATABASE_URL", config.DATABASE_URL);
  mongoose.connect(config.DATABASE_URL, function(err) {
    if (err && callback) {
      return callback(err);
    }
    app.listen(config.PORT, function() {
      console.log("Listening on localhost:" + config.PORT);
      if (callback) {
        callback();
      }
    });
  });
};

if (require.main === module) {
  runServer(function(err) {
    if (err) {
      console.error(err);
    }
  });
}

exports.app = app;
exports.runServer = runServer;
