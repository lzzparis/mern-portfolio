var React = require("react");
var connect = require("react-redux").connect;
var router = require("react-router");
var hashHistory = router.hashHistory; 

var actions = require("../actions/actions");

var Login = require("./login"); 

var mapStateToProps = function(state, props) {
  return {
    userInitialized: state.userInitialized,
    isAuthenticated: state.isAuthenticated,
    failedAuthentication: state.failedAuthentication
  };
};

var LoginContainer = connect(mapStateToProps)(Login);

module.exports = LoginContainer;
