var React = require("react");
var router = require("react-router");
var hashHistory = router.hashHistory;

var FullPost = React.createClass({
  closePost: function(){
    hashHistory.goBack(); 
  },
  render: function(){
    return(
      <div id="full-post" className={this.props.fullPostClass}>
        <span className="close-x right" onClick={this.closePost}>&times;</span>
        <h2 className="subject-header">{this.props.post.subject}</h2>
        <img className="image-content" src={this.props.post.img} />
        <p className="body-content">{this.props.post.body}</p>
      </div>
    );
  }
});

module.exports = FullPost; 