var React = require("react");
var router = require("react-router");
var hashHistory = router.hashHistory;
var Link = router.Link;

var BlogNav = function() {
  return (
    <ul className="blog-nav">
      <li className="blog-nav-item"><Link className="blog-nav-link" to="/">Home</Link></li>
      <li className="blog-nav-item"><Link className="blog-nav-link" to="/">About</Link></li>
      <li className="blog-nav-item"><Link className="blog-nav-link" to="/">Portfolio</Link></li>
      <li className="blog-nav-item"><Link className="blog-nav-link" to="/login">Login</Link></li>
      <hr />
    </ul>
  );
};

module.exports = BlogNav;