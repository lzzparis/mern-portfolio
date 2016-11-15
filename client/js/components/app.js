var React = require("react");

var FullPost = require("./full-post");
var PostFormContainer = require("./post-form-container");
var PostList = require("./post-list");

var App = function(){
  return(
    <div>
      <FullPost />
      <PostFormContainer />
      <PostList />
    </div>
  )
};

module.exports = App;