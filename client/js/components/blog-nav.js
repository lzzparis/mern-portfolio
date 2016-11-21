var React = require("react");
var router = require("react-router");
var hashHistory = router.hashHistory;
var Link = router.Link;

var BlogNav = function() {
  return (
    <ul className="blog-nav">
      <li className="blog-nav-item">Home</li>
      <li className="blog-nav-item">About</li>
      <li className="blog-nav-item">Portfolio</li>
      <Link className="admin-link" to="/login">Login</Link>
    </ul>
  );
};

module.exports = BlogNav;