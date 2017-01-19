var React = require("react");
var connect = require("react-redux").connect;

var FullPost = require("./full-post");

var mapStateToProps = function(state, props) {
  var whichPost = null;
  var whichId = null;
  var multiPostView = null;
  if(props.post) {
    whichPost = props.post;
    whichId = props.post._id;
    multiPostView = true;
  } else {
    whichPost = state.displayPost;
    whichId = props.params.id;
    multiPostView = false;
  }
  return {
    post: whichPost,
    id: whichId,
    multiPostView: multiPostView
  }
}

var FullPostContainer = connect(mapStateToProps)(FullPost);

module.exports = FullPostContainer; 
