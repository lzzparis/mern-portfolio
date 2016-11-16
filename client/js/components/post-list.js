var React = require("react");
var actions = require("../actions/actions");

var PostSummary = require("./post-summary");

var PostList = React.createClass({
  displayPost: function(id){
    this.props.dispatch(actions.fetchFullPost(id, actions.FETCH_FULL_POST_DISPLAY));
  },
  editPost: function(id){
    this.props.dispatch(actions.fetchFullPost(id, actions.FETCH_FULL_POST_EDIT));
  },
  deletePost: function(id){
    this.props.dispatch(actions.deletePost(id));
  },
  render: function(){
    var list = [];
    for(var i=0; i < this.props.posts.length; i++){
      list.push(<PostSummary displayHandler={this.displayPost} 
                  editHandler={this.editPost}
                  deleteHandler={this.deletePost} 
                  post={this.props.posts[i]} key={i}/>);
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