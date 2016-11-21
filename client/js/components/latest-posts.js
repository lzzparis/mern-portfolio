var React = require("react");

var FullPost = require("./full-post");

var POSTS = require("../../../test/server/sample-data");

var LatestPosts = function() {
  return (
    <div className="latest-posts">
      <FullPost post={POSTS[0]} />
      <FullPost post={POSTS[1]} />
      <FullPost post={POSTS[2]} />
      <FullPost post={POSTS[3]} />
    </div>
  );
};

module.exports = LatestPosts;