var React = require("react");
var connect = require("react-redux").connect;

var actions = require("../actions/actions");

var FullPost = require("./full-post");
var PostFormContainer = require("./post-form-container");
var PostListContainer = require("./post-list-container");

var App = React.createClass({
  componentDidMount:function(){
    this.props.dispatch(actions.fetchAllPosts());
  },
  render: function(){
    return(
      <div>
        <FullPost />
        <PostFormContainer />
        <PostListContainer />
      </div>
    );
  }
});


var AppContainer = connect()(App);

module.exports = AppContainer;