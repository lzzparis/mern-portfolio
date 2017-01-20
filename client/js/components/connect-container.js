var React = require("react");
var connect = require("react-redux").connect;

var Connect = require("./connect");

var ConnectContainer = connect()(Connect);

module.exports = ConnectContainer;
