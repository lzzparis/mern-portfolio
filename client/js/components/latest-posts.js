var React = require("react");

var FullPost = require("./full-post");

var LatestPosts = React.createClass({
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