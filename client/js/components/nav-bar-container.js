var React = require("react");
var connect = require("react-redux").connect;

var NavBar = require("./nav-bar");

var mapStateToProps = function(state, props) {
  return {
    navClasses: state.navClasses
  };
};

var NavBarContainer = connect(mapStateToProps)(NavBar);

module.exports = NavBarContainer;