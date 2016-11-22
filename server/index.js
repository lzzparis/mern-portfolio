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

var POSTS = [
  {subject: "Blog post 1", body: "Here are some words", timestamp: "Sun Oct 09 2016 22:18:20 GMT-0700 (MST)"},
  {subject: "Red and gold", body: "Holding her is dangerous. If word of this gets out, it could generate sympathy for the Rebellion in the senate. I have traced the Rebel spies to her. Now she is my only link to find their secret base! She'll die before she tells you anything. Leave that to me. Send a distress signal and then inform the senate that all aboard were killed! Lord Vader, the battle station plans are not aboard this ship! And no transmissions were made. An escape pod was jettisoned during the fighting, but no life forms were aboard. She must have hidden the plans in the escape pod. Send a detachment down to retrieve them. See to it personally, Commander. There'll be no one to stop us this time. Yes, sir. Not after we demonstrate the power of this station. In a way, you have determined the choice of the planet that'll be destroyed first. Since you are reluctant to provide us with the location of the Rebel base, I have chosen to test this station's destructive power... on your home planet of Alderaan. No! Alderaan is peaceful. We have no weapons. You can't possibly... You would prefer another target? A military target? Then name the system! I grow tired of asking this. So it'll be the last time. Where is the Rebel base? Dantooine. They're on Dantooine. Look at the size of that thing! Cut the chatter, Red Two. Accelerate to attack speed. This is it, boys! Red Leader, this is Gold Leader. I copy, Gold Leader. We're starting for the target shaft now. We're in position. I'm going to cut across the axis and try and draw their fire. Heavy fire, boss! Twenty-degrees. I see it. Stay low. This is Red Five, I'm going in! Luke, pull up! Are you all right? I got a little cooked, but I'm okay. How did I get into this mess? I really don't know how. We seem to be made to suffer. It's our lot in life. I've got to rest before I fall apart. My joints are almost frozen. What a desolate place this is. Where are you going? Well, I'm not going that way. It's much too rocky. This way is much easier. What makes you think there are settlements over there? Don't get technical with me. What mission? What are you talking about? I've had just about enough of you! Go that way! You'll be malfunctioning within a day, you nearsighted scrap pile! And don't let me catch you following me begging for help, because you won't get it. No more adventures. I'm not going that way.Red Leader... This is Gold Leader. We're starting out attack run. I copy, Gold Leader. Move into position. Stay in attack formation! The exhaust post is... marked and locked in! Switch power to front deflector screens. How many guns do you think, Gold Five. I'd say about twenty guns. Some on the surface, some on the towers. Death Star will be in range in five minutes. Switching to targeting computer. Computer's locked. Getting a signal. The guns...they've stopped! Stabilize your read deflectors. Watch for enemy fighters.", timestamp: "Sat Oct 08 2016 17:18:20 GMT-0700 (MST)"},
  {subject: "Trapped", body: "Perhaps you refer to the imminent attack of your Rebel fleet. Yes...I assure you we are quite safe from your friends here. Your overconfidence is your weakness. Your faith in your friends is yours. It is pointless to resist, my son. Everything that has transpired has done so according to my design. Your friends up there on the Sanctuary Moon are walking into a trap. As is your Rebel fleet! It was I who allowed the Alliance to know the location of the shield generator. It is quite safe from your pitiful little band. An entire legion of my best troops awaits them. Oh...I'm afraid the deflector shield will be quite operational when your friends arrive. Oh, General Solo, somebody's coming. Oh! Luke! Where's Leia? What? She didn't come back? I thought she was with you. We got separated. Hey, we better go look for her. Take the squad ahead. We'll meet at the shield generator at 0300. Come on, Artoo. We'll need your scanners. Don't worry, Master Luke. We know what to do. And you said it was pretty here. Ugh! You cannot hide forever, Luke. I will not fight you. Give yourself to the dark side. It is the only way you can save your friends. Yes, your thoughts betray you. Your feelings for them are strong. Especially for... It's a trap! Good. Use your aggressive feelings, boy! Let the hate flow through you. Obi-Wan has taught you well. I will not fight you, father. You are unwise to lower your defenses. Your thoughts betray you, father. I feel the good in you...the conflict. There is no conflict. You couldn't bring yourself to kill me before, and I don't believe you'll destroy me now. You underestimate the power of the dark side. If you will not fight, then you will meet your destiny. Good. Good.", timestamp: "Fri Oct 07 2016 17:18:20 GMT-0700 (MST)"},
  {subject: "Alderaan", body: "We've entered the Alderaan system. Governor Tarkin, I should have expected to find you holding Vader's leash. I recognized your foul stench when I was brought on board. Charming to the last. You don't know how hard I found it signing the order to terminate your life! I surprised you had the courage to take the responsibility yourself! Princess Leia, before your execution I would like you to be my guest at a ceremony that will make this battle station operational. No star system will dare oppose the Emperor now. The more you tighten your grip, Tarkin, the more star systems will slip through your fingers. A fighter that size couldn't get this deep into space on its own. Well, he ain't going to be around long enough to tell anyone about us. Look at him. He's headed for that small moon. I think I can get him before he gets there...he's almost in range. That's no moon! It's a space station. It's too big to be a space station. I have a very bad feeling about this. Yeah, I think your right. Full reverse! Chewie, lock in the auxiliary power. Why are we still moving towards it? We're caught in a tractor beam! It's pulling us in! But there's gotta be something you can do! There's nothin' I can do about it, kid. I'm in full power. I'm going to have to shut down. But they're not going to get me without a fight! You can't win. But there are alternatives to fighting. There's nothing you could have done, Luke, had you been there. You'd have been killed, too, and the droids would be in the hands of the Empire. I want to come with you to Alderaan. There's nothing here for me now. I want to learn the ways of the Force and become a Jedi like my father. Mos Eisley Spaceport. You will never find a more wretched hive of scum and villainy. We must be cautious. How long have you had these droids? About three or four seasons. They're for sale if you want them. Obi-Wan Kenobi...Obi-Wan? Now thats a name I haven't heard in a long time...a long time. I think my uncle knew him. He said he was dead. Oh, he's not dead, not...not yet. You know him! Well of course, of course I know him. He's me! I haven't gone by the name Obi-Wan since oh, before you were born. Then the droid does belong to you. Don't seem to remember ever owning a droid. Very interesting... I think we better get indoors. The Sandpeople are easily startled but they will soon be back and in greater numbers. Threepio! Where am I? I must have taken a bad step... Can you stand? We've got to get out of here before the Sandpeople return. I don't think I can make it. You go on, Master Luke. There's no sense in you risking yourself on my account. I'm done for. No, you're not. What kind of talk is that? Quickly, son...they're on the move. We don't serve their kind here! What? Your droids. They'll have to wait outside. We don't want them here. Listen, why don't you wait out by the speeder. We don't want any trouble. I heartily agree with you sir. Negola dewaghi wooldugger?!? He doesn't like you. I'm sorry. I don't like you either You just watch yourself. We're wanted men. I have the death sentence in twelve systems. I'll be careful than. You'll be dead. This little one isn't worth the effort. Come let me buy you something...", timestamp: "Thu Oct 06 2016 17:18:20 GMT-0700 (MST)"},
  {subject: "Cutest kitty", body: "Look at this cat isn't it the cutest cat i love cats they are the best animals evar", img:"http://placekitten.com/600/600", timestamp: "Thu Oct 06 2016 17:18:20 GMT-0700 (MST)"}
];

var strategy = new BasicStrategy(function(username, password, callback) {
  console.log("receiving: ",username, password);
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

app.post("/init", function(req, res){
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

app.put("/auth", passport.authenticate("basic", {session: false}), function(req, res) {
  res.status(200).json({message:"Hooray, you have authenticated!"});  
});

app.get("/all", function(req,res) {
  Post.find(function(err, posts) {
    if(err || !posts) {
      res.status(500).json({message:"Internal server error"}); 
      return;
    }
    res.status(200).json(posts);
  });
});

app.post("/all", function(req,res) {
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
