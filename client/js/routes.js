var React = require("react");
var router = require("react-router");
var Router = router.Router;
var IndexRoute = router.IndexRoute;
var Route = router.Route;
var Redirect = router.Redirect;
var hashHistory = router.hashHistory;
var Link = router.Link;

var BlogAppContainer = require("./components/blog-app-container");
var BlogContainer = require("./components/blog-container");
var LatestPostsContainer = require("./components/latest-posts-container");
var FullPostContainer = require("./components/full-post-container"); 
var LoginContainer = require("./components/login-container");
var AdminContainer = require("./components/admin-container");
var PreviewPost = require("./components/preview-post");

var routes = (
  <Router history={hashHistory}>
    <Redirect from="/" to="blog/latest" />
    <Redirect from="/blog" to="blog/latest" />
    <Route path="/" component={BlogAppContainer}>
      <Route path="blog" component={BlogContainer}>
        <Route path="latest" component={LatestPostsContainer} />
        <Route path="full/:id" component={FullPostContainer} />
      </Route>
      <Route path="login" component={LoginContainer} />
      <Route path="admin" component={AdminContainer}>
        <Route path="preview/:id" component={PreviewPost}>
          <IndexRoute component={FullPostContainer} />
        </Route>
      </Route>
    </Route>
  </Router>
);


module.exports = routes;
