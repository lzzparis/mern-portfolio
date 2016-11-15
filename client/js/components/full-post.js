var React = require("react");

var FullPost = React.createClass({
  render: function(){
    return(
      <div id="full-post" className={this.props.fullPostClass}>
        <span className="close-x right">&times;</span>
        <h2 className="subject-header">{this.props.post.subject}</h2>
        <img className="image-content" src={this.props.post.img} />
        <p className="body-content">{this.props.post.body}</p>
      </div>
    );
  }
});

module.exports = FullPost; 