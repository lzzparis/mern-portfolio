var React = require("react");
var router = require("react-router");
var Router = router.Router;
var IndexRoute = router.IndexRoute;
var Route = router.Route;
var hashHistory = router.hashHistory;
var Link = router.Link;

var App = require("./components/app");
var Blog = require("./components/blog");
var LatestPostsContainer = require("./components/latest-posts-container");
var FullPost = require("./components/full-post"); 
var LoginContainer = require("./components/login-container");
var Admin = require("./components/admin");
var PreviewPostContainer = require("./components/preview-post-container");

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="blog" component={Blog}>
        <Route path="latest" component={LatestPostsContainer} />
        <Route path="full/:id" component={FullPost} />
      </Route>
      <Route path="login" component={LoginContainer} />
      <Route path="admin" component={Admin}>
        <Route path="preview/:id" component={PreviewPostContainer} />
      </Route>
    </Route>
  </Router>
);


module.exports = routes;