var React = require("react");
var connect = require("react-redux").connect;
var router = require("react-router");
var hashHistory = router.hashHistory; 

var NavBarContainer = require("./nav-bar-container"); 

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <NavBarContainer className="nav-bar" />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
