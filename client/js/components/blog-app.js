var React = require("react");
var connect = require("react-redux").connect;
var router = require("react-router");
var hashHistory = router.hashHistory; 

var actions = require("../actions/actions");

var BlogApp = React.createClass({
  componentDidMount: function() {
    this.props.dispatch(actions.fetchUserStatus());
  }, 
  render: function() {
    return(
      <div className="blog-app">
        {this.props.children}
      </div>
    );
  }
});

module.exports = BlogApp;
