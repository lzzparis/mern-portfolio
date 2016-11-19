var React = require("react");
var router = require("react-router");
var Router = router.Router;
var IndexRoute = router.IndexRoute;
var Route = router.Route;
var hashHistory = router.hashHistory;
var Link = router.Link;

var App = require("./components/app");
var LoginContainer = require("./components/login");
var Admin = require("./components/admin");
var FullPostContainer = require("./components/full-post-container");

var LoginLink = function() { 
  return (
    <Link className="login-link" to="/login">Login page</Link>
  );
};

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LoginLink} />
      <Route path="login" component={LoginContainer} />
      <Route path="admin" component={Admin}>
        <Route path="full" component={FullPostContainer} />
      </Route>
    </Route>
  </Router>
);


module.exports = routes;