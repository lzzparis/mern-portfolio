var React = require("react");
var moment = require("moment");

var actions = require("../actions/actions");

var PostSummary = React.createClass({
  displayPost: function() {
    this.props.displayHandler(this.props.post._id);
  },
  editPost: function() {
    this.props.editHandler(this.props.post._id);
  },
  deletePost: function() {
    this.props.deleteHandler(this.props.post._id);
  },
  render: function() {
    var prettyTimeCreated = moment(this.props.post.created).format("MM-DD-YY @ h:mm a");
    var prettyTimeModified = moment(this.props.post.modified).format("MM-DD-YY @ h:mm a");
    return(
      <li className="post-summary" id={this.props.post._id} >
        <button className="button post-summary-button post-summary-button-edit" onClick={this.editPost}>&#x270e;</button>
        <button className="button post-summary-button post-summary-button-delete" onClick={this.deletePost}>&times;</button>
        <p className="post-summary-content" onClick={this.displayPost}>
          {this.props.post.subject} <span className="post-summary-timestamp"> .. {prettyTimeCreated} .. {prettyTimeModified}</span>
        </p>
      </li>
    );
  }
});

module.exports = PostSummary;
