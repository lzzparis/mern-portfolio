var React = require("react");

var PostSummary = require("./post-summary");

var PostList = function(){
  return(
    <div className="half-width right">
      <h1>Post summary</h1>
      <ul id="post-list"></ul>  
    </div>
  );
}

module.exports = PostList;