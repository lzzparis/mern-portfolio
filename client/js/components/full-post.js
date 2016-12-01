var React = require("react");
var router = require("react-router");
var Link = router.Link;
var ReactMarkdown = require("react-markdown");

var actions = require("../actions/actions");

var FullPost = React.createClass({
  componentWillMount: function() {
    if(!this.props.multiPostView){
      this.props.dispatch(actions.fetchFullPost(this.props.id, actions.FETCH_FULL_POST_DISPLAY));
    }
  },
  render: function(props) {
    var postToRender = this.props.post;
    var header = null;
    if(this.props.multiPostView) {
      //multi-post view 
      header = (<h2 className="full-post-content-subject"><Link className="full-post-content-subject-link" to={"/blog/full/"+postToRender._id}>{postToRender.subject}</Link></h2>);
    } else {
      //admin view - don't link to full blog view
      header = (<h2 className="full-post-content-subject">{postToRender.subject}</h2>);
    }
    return (
      <div className="full-post">
        {header}
        <img className="full-post-content-image" src={postToRender.img} />
        <ReactMarkdown className="full-post-content-body" source={postToRender.body}/>
      </div>
    );
  }
});

module.exports = FullPost;