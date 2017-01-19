var React = require("react");

var actions = require("../actions/actions");
var FullPostContainer = require("./full-post-container");

var LatestPosts = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(actions.fetchAllPosts("created/newest"));
  },
  render: function() {
    var list = [];
    for (var i=0 ; i < this.props.posts.length ; i++) {
      list.push(<hr key={"hr" + i} />);
      list.push(<FullPostContainer post={this.props.posts[i]} key={i} />);
    }
    return (
      <div className="latest-posts">
        {list}
      </div>
    );
  }
});

module.exports = LatestPosts;
