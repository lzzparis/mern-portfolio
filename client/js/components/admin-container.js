var React = require("react");
var connect = require("react-redux").connect;

var Admin = require("./admin");
 
var mapStateToProps = function(state, props){
  return {
    isAuthenticated: state.isAuthenticated
  };
};

var AdminContainer = connect(mapStateToProps)(Admin);

module.exports = AdminContainer;
