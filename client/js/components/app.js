var React = require("react");
var connect = require("react-redux").connect;
var router = require("react-router");
var hashHistory = router.hashHistory; 


var actions = require("../actions/actions");

var FullPostContainer = require("./full-post-container");
var PostFormContainer = require("./post-form-container");
var PostListContainer = require("./post-list-container");

var App = React.createClass({
  // componentDidMount: function(){
  //   this.props.dispatch(actions.fetchUserStatus());
  // }, 
  render: function(){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
});


var AppContainer = connect()(App);

module.exports = AppContainer;