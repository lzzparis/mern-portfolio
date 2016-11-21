var React = require("react");
var connect = require("react-redux").connect;

var PreviewPost = require("./preview-post");

var mapStateToProps = function(state, props){
  return {
    previewPostClass: state.previewPostClass,
    post: state.displayPost
  }
}

var PreviewPostContainer = connect(mapStateToProps)(PreviewPost);

module.exports = PreviewPostContainer; 