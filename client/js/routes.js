var React = require("react");
var router = require("react-router");
var Router = router.Router;
var IndexRoute = router.IndexRoute;
var Route = router.Route;
var Redirect = router.Redirect;
var hashHistory = router.hashHistory;
var Link = router.Link;

var App = require("./components/app");
var BusinessCard = require("./components/business-card");
var Bio = require("./components/bio");
var ProjectList = require("./components/project-list");
var Connect = require("./components/connect");

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BusinessCard} />
      <Route path="/bio" component={Bio} />
      <Route path="/projects" component={ProjectList} />
      <Route path="/connect" component={Connect} />
    </Route>
  </Router>
);


module.exports = routes;
