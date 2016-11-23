var React = require("react");
var router = require("react-router");
var Router = router.Router;
var IndexRoute = router.IndexRoute;
var Route = router.Route;
var hashHistory = router.hashHistory;
var Link = router.Link;

var App = require("./components/app");
var LoginContainer = require("./components/login-container");
var Admin = require("./components/admin");
var FullPostContainer = require("./components/full-post-container");

var AdminLink = function() { 
  return (
    <Link className="admin-link" to="/login">Admin page</Link>
  );
};

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AdminLink} />
      <Route path="login" component={LoginContainer} />
      <Route path="admin" component={Admin}>
        <Route path="preview/:id" component={FullPostContainer} />
      </Route>
    </Route>
  </Router>
);


module.exports = routes;