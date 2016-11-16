var React = require("react");
var router = require("react-router");
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

var App = require("./components/app");
var FullPostContainer = require("./components/full-post-container");

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="full" component={FullPostContainer} />
    </Route>
  </Router>
);


module.exports = routes;