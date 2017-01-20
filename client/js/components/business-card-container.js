var React = require("react");
var connect = require("react-redux").connect;

var BusinessCard = require("./business-card");

var BusinessCardContainer = connect()(BusinessCard);

module.exports = BusinessCardContainer;
