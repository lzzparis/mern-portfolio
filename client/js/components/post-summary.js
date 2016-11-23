var React = require("react");
var moment = require("moment");

var router = require("react-router");
var hashHistory = router.hashHistory;

var actions = require("../actions/actions");

var PostSummary = React.createClass({
  displayPost: function(){
    this.props.displayHandler(this.props.post._id);
    hashHistory.push("/admin/preview/"+this.props.post._id);
  },
  editPost: function(){
    this.props.editHandler(this.props.post._id);
  },
  deletePost: function(){
    this.props.deleteHandler(this.props.post._id);
  },
  render: function(){
    var prettyTime = moment(this.props.post.timestamp).format("MM-DD-YYYY @ h:mm a");
    return(
      <li className="post-summary" id={this.props.post._id} >
        <button className="edit" onClick={this.editPost}>&#x270e;</button>
        <button className="delete" onClick={this.deletePost}>&times;</button>
        <p className="post-info" onClick={this.displayPost}>
          {this.props.post.subject} ..... {prettyTime}
        </p>
      </li>
    );
  }
});

module.exports = PostSummary;