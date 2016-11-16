var React = require("react");
var moment = require("moment");

var router = require("react-router");
var hashHistory = router.hashHistory;

var actions = require("../actions/actions");

var PostSummary = React.createClass({
  displayPost: function(){
    this.props.handler(this.props.post._id);
    hashHistory.push("/full");
  },
  render: function(){
    var prettyTime = moment(this.props.post.timestamp).format("MM-DD-YYYY @ h:mm a");
    return(
      <li className="post-summary" id={this.props.post._id} onClick={this.displayPost}>
        <button className="edit">&#x270e;</button>
        <button className="delete">&times;</button>
        <p className="post-info">
          {this.props.post.subject} ..... {prettyTime}
        </p>
      </li>
    );
  }
});

module.exports = PostSummary;