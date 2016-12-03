var React = require("react");
var connect = require("react-redux").connect;

var App = require("./app"); 

var AppContainer = connect()(App);

module.exports = AppContainer;
