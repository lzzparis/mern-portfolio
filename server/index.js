var express = require('express');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var bcrypt = require("bcryptjs");
var passport = require("passport");
var BasicStrategy = require("passport-http").BasicStrategy;
var markdown = require("markdown").markdown;

var config = require("./config");

var Post = require("./models/post");
var User = require("./models/user");

var app = express();

app.use(bodyParser.json());

app.use(express.static(process.env.CLIENT_PATH || "build/dev/client/"));

var strategy = new BasicStrategy(function(username, password, callback) {
  User.findOne({
    username: username
  }, function (err, user) {
    if (err) {
      callback(err);
      return;
    }

    if (!user) {
      return callback(null, false, {
        message: 'Incorrect username.'
      });
    }

    user.validatePassword(password, function(err, isValid) {
      if (err) {
        return callback(err);
      }

      if (!isValid) {
        return callback(null, false, {
          message: 'Incorrect password.'
        });
      }
      return callback(null, user);
    });
  });
});

passport.use(strategy);
app.use(passport.initialize());

app.post("/init", function(req, res){
  var initUser = {
    username: "user",
    password: "pass"
  }

  bcrypt.hash(initUser.password, 10, function(err, hash){
    initUser.password = hash;
    User.findOneAndUpdate({username: initUser.username}, initUser, function(err, user){
      if(err) {
        res.status(500).json({message:"Internal server error"}); 
        return;
      } else if (!user) {
        User.create(initUser, function(err, user){
          if(err || !user){
            console.error(err);
            res.status(500).json({message:"Internal server error"});
            return;
          }
          res.status(201).json({message: "User ["+user.username+"] created successfully"});
        });
      } else {
        res.status(201).json({message:"Password updated"});
      }
    });
  })
});

//TODO - SECURE THIS!!!
app.delete("/user/:id", function(req, res){
  var user = {
    username: req.params.id
  };

  User.findOneAndRemove(user, function(err, user){
      if(err || !user){
      res.status(500).json({message:"Internal server error"});
      return;
    }
    res.status(200).json(user);
  });
});

app.put("/auth", passport.authenticate("basic", {session: false}), function(req, res) {
  res.status(200).json({message:"Hooray, you have authenticated!"});  
});

app.get("/all", function(req,res){
  Post.find(function(err, posts){
    if(err || !posts){
      res.status(500).json({message:"Internal server error"}); 
      return;
    }
    res.status(200).json(posts);
  });
});

app.get("/:id", function(req,res){
  var id = req.params.id;
  Post.findOne({_id:id}, function(err, post){
    if(err || !post){
      res.status(500).json({message:"Internal server error"}); 
      return;
    }
// TODO - find markdown solution that works with React
//    post.body = markdown.toHTML(post.body);   
    res.status(200).json(post);
  });
});

app.post("/", function(req,res){
  var newPost = {
    subject: req.body.subject,
    body: req.body.body,
    img: req.body.img,
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
    img: req.body.img,
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
