var React = require("react");
var connect = require("react-redux").connect;

var FullPost = require("./full-post");

var mapStateToProps = function(state, props){
  return {
    post: state.displayPost,
    id: props.params.id
  }
}

var FullPostContainer = connect(mapStateToProps)(FullPost);

module.exports = FullPostContainer; 