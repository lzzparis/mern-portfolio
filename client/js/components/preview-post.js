var React = require("react");
var router = require("react-router");
var hashHistory = router.hashHistory;

var FullPost = require("./full-post");
var PreviewPost = React.createClass({
  closePost: function(){
    hashHistory.goBack(); 
  },
  render: function(){
    return(
      <div id="post-preview" className={this.props.previewPostClass}>
        <span className="close-x right" onClick={this.closePost}>&times;</span>
        <FullPost post={this.props.post} />
      </div>
    );
  }
});

module.exports = PreviewPost; 