var React = require("react");
var router = require("react-router");
var hashHistory = router.hashHistory;
var Link = router.Link;

var BlogNav = function() {
  return (
    <ul className="blog-nav">
      <li className="blog-nav-item"><Link to="/">Home</Link></li>
      <li className="blog-nav-item">About</li>
      <li className="blog-nav-item">Portfolio</li>
      <li className="blog-nav-item"><Link to="/login">Login</Link></li>
      <hr />
    </ul>
  );
};

module.exports = BlogNav;