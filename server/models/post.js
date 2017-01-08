var mongoose = require("mongoose");

var PostSchema = new mongoose.Schema({
  subject: {type:String, required: true},
  body: {type:String},
  img: {type:String},
  created: {type:Date, required: true},
  modified: {type:Date, required: true},
  draft: {type: Boolean, required: true}
});

var Post = mongoose.model("Post",PostSchema);

module.exports = Post;