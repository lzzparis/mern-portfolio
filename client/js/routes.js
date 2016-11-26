var React = require("react");
var router = require("react-router");
var Router = router.Router;
var IndexRoute = router.IndexRoute;
var Route = router.Route;
var Redirect = router.Redirect;
var hashHistory = router.hashHistory;
var Link = router.Link;

var AppContainer = require("./components/app");
var Blog = require("./components/blog");
var LatestPostsContainer = require("./components/latest-posts-container");
var FullPostContainer = require("./components/full-post-container"); 
var LoginContainer = require("./components/login-container");
var Admin = require("./components/admin");
var PreviewPost = require("./components/preview-post");

var routes = (
  <Router history={hashHistory}>
    <Redirect from="/" to="blog/latest" />
    <Route path="/" component={AppContainer}>
      <Route path="blog" component={Blog}>
        <Route path="latest" component={LatestPostsContainer} />
        <Route path="full/:id" component={FullPostContainer} />
      </Route>
      <Route path="login" component={LoginContainer} />
      <Route path="admin" component={Admin}>
        <Route path="preview/:id" component={PreviewPost}>
          <IndexRoute component={FullPostContainer} />
        </Route>
      </Route>
    </Route>
  </Router>
);


module.exports = routes;