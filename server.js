var express = require('express');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var config = require("./config");
var Post = require("./models/post");

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));


app.get("/:id",function(req,res){
  var id = req.params.id;
  Post.findOne({_id:id}, function(err, post){
    if(err || !post){
      res.status(500).json({message:"Internal server error"}); 
      return;
    }
    res.status(200).json(post);
  });
});

app.post("/", function(req,res){
  var newPost = {
    subject: req.body.subject,
    body: req.body.body,
    timestamp: new Date()
  };
  Post.create(newPost, function(err, post){
    if(err || !post){
      res.status(500).json({message:"Internal server error"});
      return;
    }
    res.status(201).json(post);
  });
});

app.put("/:id", function(req,res){
  var id = req.params.id;
  var updatedPost = {
    subject: req.body.subject,
    body: req.body.body,
    timestamp: new Date()
  };
  Post.findOneAndUpdate({_id:id},updatedPost,function(err, post){
    if(err || !post){
      res.status(500).json({message:"Internal server error"});
      return;
    }
    res.status(200).json(post);
  });
});

app.delete("/:id", function(req,res){
  var id = req.params.id;
  Post.findOneAndRemove({_id:id},function(err,post){
    if(err || !post){
      res.status(500).json({message:"Internal server error"});
      return;
    }
    res.status(200).json(post);
  })
});

var runServer = function(callback){
  mongoose.connect(config.DATABASE_URL, function(err){
    if(err && callback){
      return callback(err);
    }
    app.listen(config.PORT, function(){
      console.log("Listenting on localhost:" + config.PORT);
      if (callback){
        callback();
      }
    });
  });
};

if (require.main === module){
  runServer(function(err){
    if(err){
      console.error(err);
    }
  });
}

exports.app = app;
exports.runServer = runServer;
