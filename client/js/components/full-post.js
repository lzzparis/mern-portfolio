var React = require("react");

var POSTS = require("../../../test/server/sample-data");

var FullPost = function(props) {
  var postToRender = null;
  if (props.params.id){
    postToRender = POSTS[props.params.id];
  } else {
    postToRender = props.post;
  }
  return (
    <div className="full-post">
      <h2 className="subject-header">{postToRender.subject}</h2>
      <img className="image-content" src={postToRender.img} />
      <p className="body-content">{postToRender.body}</p>
    </div>
  );
};

module.exports = FullPost;