var React = require("react");

var FullPost = require("./full-post");
var PostForm = require("./post-form");
var PostList = require("./post-list");

var App = function(){
  return(
    <div>
      <FullPost />
      <PostForm />
      <PostList />
    </div>
  )
};

module.exports = App;