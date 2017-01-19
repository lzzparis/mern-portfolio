var React = require("react");

var actions = require("../actions/actions");

var BlogHeader = require("./blog-header");
var BlogNav = require("./blog-nav");
var BlogMain = require("./blog-main");

var Blog = React.createClass({
  componentDidMount: function() {
    this.props.dispatch(actions.resetForm());
  },
  render: function() {
    return (
      <div className="blog">
        <BlogHeader />
        <BlogMain children={this.props.children} />
      </div>
    );
  }
});

module.exports = Blog;
