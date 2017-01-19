var React = require("react");
var connect = require("react-redux").connect;

var BlogApp = require("./blog-app"); 

var BlogAppContainer = connect()(BlogApp);

module.exports = BlogAppContainer;
