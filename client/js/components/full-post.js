var React = require("react");

var actions = require("../actions/actions");

var FullPost = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(actions.fetchFullPost(this.props.id, actions.FETCH_FULL_POST_DISPLAY));
  },
  render: function(props) {
    var postToRender = this.props.post;
    return (
      <div className="full-post">
        <h2 className="subject-header">{postToRender.subject}</h2>
        <img className="image-content" src={postToRender.img} />
        <p className="body-content">{postToRender.body}</p>
      </div>
    );
  }
});

module.exports = FullPost;