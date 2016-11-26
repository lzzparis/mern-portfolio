var React = require("react");

var BlogHeader = require("./blog-header");
var BlogNav = require("./blog-nav");
var BlogMain = require("./blog-main");

var Blog = function(props) {
  return (
    <div>
      <BlogHeader />
      <BlogNav />
      <BlogMain children={props.children} />
    </div>
  );
};

module.exports = Blog;