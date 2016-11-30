var React = require("react");
var connect = require("react-redux").connect;

var Blog = require("./blog");

var BlogContainer = connect()(Blog);

module.exports = BlogContainer;