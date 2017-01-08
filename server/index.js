var express = require('express');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var bcrypt = require("bcryptjs");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var config = require("./config");

var Post = require("./models/post");
var User = require("./models/user");

var app = express();

app.use(bodyParser.json());

app.use(express.static(process.env.CLIENT_PATH || "build/dev/client/"));

var POSTS = require("../test/sample-data"); 

var strategy = require("./strategy"); 

passport.use(strategy);
app.use(passport.initialize());

app.get("/user", function(req, res){
  User.find(function(err, users){
    if(err || !users){
      res.status(500).json({message:"Internal server error"});
      return;
    } else if (users.length == 0) {
      res.status(200).json({message: "false"});
    } else {
      res.status(200).json({message: "true"});
    }
  });
});

app.post("/user", function(req, res){
  var initUser = {
    username: req.body.username,
    password: req.body.password
  };

  bcrypt.hash(initUser.password, 10, function(err, hash){
    initUser.password = hash;
    User.create(initUser, function(err, user){
      if(err || !user){
        console.error(err);
        res.status(500).json({message:"Internal server error"});
        return;
      }
      res.status(201).json({message: "User ["+user.username+"] created successfully"});
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

app.post("/login", passport.authenticate("local", {session: false}), function(req, res) {
  res.status(200).json({message:"Hooray, you have authenticated!"});  
});

app.get("/post/published/created/newest", function(req,res){
  var query = {draft: false}; 
  var sort = {created: -1};
  Post.find(query).sort(sort).exec(function(err, posts) {
    if(err || !posts) {
      res.status(500).json({message:"Internal server error"}); 
      return;
    }
    res.status(200).json(posts);
  });
});

app.get("/post/published/created/oldest", function(req,res){
  var query = {draft: false}; 
  var sort = {created: 1};
  Post.find(query).sort(sort).exec(function(err, posts) {
    if(err || !posts) {
      res.status(500).json({message:"Internal server error"}); 
      return;
    }
    res.status(200).json(posts);
  });
});

app.get("/post/published/modified/newest", function(req,res){
  var query = {draft: false}; 
  var sort = {modified: -1};
  Post.find(query).sort(sort).exec(function(err, posts) {
    if(err || !posts) {
      res.status(500).json({message:"Internal server error"}); 
      return;
    }
    res.status(200).json(posts);
  });
});

app.get("/post/published/modified/oldest", function(req,res){
  var query = {draft: false}; 
  var sort = {modified: 1};
  Post.find(query).sort(sort).exec(function(err, posts) {
    if(err || !posts) {
      res.status(500).json({message:"Internal server error"}); 
      return;
    }
    res.status(200).json(posts);
  });
});

app.get("/post/drafts/created/newest", function(req,res){
  var query = {draft: true}; 
  var sort = {created: -1};
  Post.find(query).sort(sort).exec(function(err, posts) {
    if(err || !posts) {
      res.status(500).json({message:"Internal server error"}); 
      return;
    }
    res.status(200).json(posts);
  });
});

app.get("/post/drafts/created/oldest", function(req,res){
  var query = {draft: true}; 
  var sort = {created: 1};
  Post.find(query).sort(sort).exec(function(err, posts) {
    if(err || !posts) {
      res.status(500).json({message:"Internal server error"}); 
      return;
    }
    res.status(200).json(posts);
  });
});

app.get("/post/drafts/modified/newest", function(req,res){
  var query = {draft: true}; 
  var sort = {modified: -1};
  Post.find(query).sort(sort).exec(function(err, posts) {
    if(err || !posts) {
      res.status(500).json({message:"Internal server error"}); 
      return;
    }
    res.status(200).json(posts);
  });
});

app.get("/post/drafts/modified/oldest", function(req,res){
  var query = {draft: true}; 
  var sort = {modified: 1};
  Post.find(query).sort(sort).exec(function(err, posts) {
    if(err || !posts) {
      res.status(500).json({message:"Internal server error"}); 
      return;
    }
    res.status(200).json(posts);
  });
});

app.post("/post/all", function(req,res) {
  var posts = [];
  for (var i = 0; i < POSTS.length; i++){
    Post.create(POSTS[i], function(err, post) {
      if(err || !posts) {
        res.status(500).json({message:"Internal server error"}); 
        return;
      }
      posts.push(post);
    });
  }  
  res.status(200).json(posts);
});


app.get("/post/:id", function(req,res){
  var id = req.params.id;
  Post.findOne({_id:id}, function(err, post){
    if(err || !post){
      res.status(500).json({message:"Internal server error"}); 
      return;
    }
    res.status(200).json(post);
  });
});

app.post("/post", function(req,res){
  var newPost = {
    subject: req.body.subject,
    body: req.body.body,
    img: req.body.img,
    created: new Date(),
    modified: new Date(),
    draft: req.body.draft
  };
  Post.create(newPost, function(err, post){
    if(err || !post){
      res.status(500).json({message:"Internal server error"});
      return;
    }
    res.status(201).json(post);
  });
});

app.put("/post/:id", function(req,res){
  var id = req.params.id;
  var updatedPost = {
    subject: req.body.subject,
    body: req.body.body,
    img: req.body.img,
    modified: new Date(),
    draft: req.body.draft
  };
  Post.findOneAndUpdate({_id:id},updatedPost,function(err, post){
    if(err || !post){
      res.status(500).json({message:"Internal server error"});
      return;
    }
    res.status(200).json(post);
  });
});

app.delete("/post/:id", function(req,res){
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
      console.log("Listening on localhost:" + config.PORT);
      console.log("DATABASE_URL:", config.DATABASE_URL);
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
