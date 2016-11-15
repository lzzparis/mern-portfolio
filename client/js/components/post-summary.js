var React = require("react");

var PostSummary = function(){
  return(
    <li className="post-summary">
      <button className="edit">&#x270e;</button>
      <button className="delete">&times;</button>
      <p className="post-info"></p>
    </li>
  );
}

module.exports = PostSummary;