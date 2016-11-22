var React = require("react");

var actions = require("../actions/actions");
var FullPost = require("./full-post");

var LatestPosts = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(actions.fetchAllPosts());
  },
  render: function() {
    var list = [];
    for (var i=0 ; i < this.props.posts.length ; i++){
      list.push(<FullPost post={this.props.posts[i]} key={i} />);
    }
    return (
      <div className="latest-posts">
        {list}
      </div>
    );
  }
});

module.exports = LatestPosts;