var React = require("react");
var connect = require("react-redux").connect;

var PostList = require("./post-list");

var mapStateToProps = function(state, props){
  return{
    posts: state.posts
  }
}

var PostListContainer = connect(mapStateToProps)(PostList);

module.exports = PostListContainer;