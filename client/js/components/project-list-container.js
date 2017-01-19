var React = require("react");
var connect = require("react-redux").connect;

var ProjectList = require("./project-list");

var ProjectListContainer = connect()(ProjectList);

module.exports = ProjectListContainer;
