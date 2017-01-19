var React = require("react");
var connect = require("react-redux").connect;

var PostList = require("./post-list");

var mapStateToProps = function(state, props) {
  return{
    posts: state.drafts,
    header: "Drafts"
  }
}

var DraftListContainer = connect(mapStateToProps)(PostList);

module.exports = DraftListContainer;
