var React = require("react");
var router = require("react-router");
var Link = router.Link;

var BlogHeader = function() {
  return (
    <Link to="/blog/posts/latest"> 
    <div className="blog-header">
      <img className="blog-header-image" src="../../assets/name-stamped.png" />
    </div>
    </Link>
  );
};

module.exports = BlogHeader;