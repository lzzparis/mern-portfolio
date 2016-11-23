var React = require("react");
var router = require("react-router");
var hashHistory = router.hashHistory;

var FullPostContainer = require("./full-post-container");
var PreviewPost = React.createClass({
  closePost: function(){
    hashHistory.goBack(); 
  },
  render: function(){
    return(
      <div id="post-preview">
        <span className="close-x right" onClick={this.closePost}>&times;</span>
        <FullPostContainer />
      </div>
    );
  }
});

module.exports = PreviewPost; 