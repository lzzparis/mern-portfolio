var React = require("react");
var actions = require("../actions/actions");

var PostSummary = require("./post-summary");

var PostList = React.createClass({
  displayPost: function(id){
    this.props.dispatch(actions.fetchFullPost(id));
  },
  render: function(){
    var list = [];
    for(var i=0; i < this.props.posts.length; i++){
      list.push(<PostSummary handler={this.displayPost} post={this.props.posts[i]} key={i}/>);
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