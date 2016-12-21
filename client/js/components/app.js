var React = require("react");
var connect = require("react-redux").connect;
var router = require("react-router");
var hashHistory = router.hashHistory; 

var actions = require("../actions/actions");

var App = React.createClass({
  componentDidMount: function() {
    this.props.dispatch(actions.fetchUserStatus());
  }, 
  render: function() {
    return(
      <div className="app">
        <div className="app-toolbar">
          <p className="app-toolbar-text hide-for-narrow-views"> 
            Manage and view your blog using this MERN stack tool.
          </p>
          <p className="app-toolbar-text"> 
            Demo credentials are username "user" and password "pass".
          </p>
          <p className="app-toolbar-text"> 
             Created by <a href="http://lizzieparis.herokuapp.com/" target="_blank">Lizzie Paris.</a> 
          </p>
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
