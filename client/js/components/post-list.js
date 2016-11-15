var React = require("react");

var PostSummary = require("./post-summary");

var PostList = React.createClass({
  render: function(){
    var list = [];
    for(var i=0; i < this.props.posts.length; i++){
      list.push(<PostSummary post={this.props.posts[i]} key={i}/>);
    }
    return(
      <div className="half-width right">
        <h1>Post summary</h1>
        <ul id="post-list">{list}</ul>  
      </div>
    );
  }
});

module.exports = PostList;