var React = require("react");
var moment = require("moment");

var PostSummary = function(props){
  var prettyTime = moment(props.post.timestamp).format("MM-DD-YYYY @ h:mm a");
  return(
    <li className="post-summary" id={props.post._id}>
      <button className="edit">&#x270e;</button>
      <button className="delete">&times;</button>
      <p className="post-info">
        {props.post.subject} ..... {prettyTime}
      </p>
    </li>
  );
}

module.exports = PostSummary;