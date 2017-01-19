var React = require("react");
var connect = require("react-redux").connect;

var LatestPosts = require("./latest-posts");

var mapStateToProps = function(state, props) {
  return {
    posts: state.posts
  };
};

var LatestPostsContainer = connect(mapStateToProps)(LatestPosts);

module.exports = LatestPostsContainer;