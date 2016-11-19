var React = require("react");
var connect = require("react-redux").connect;

var actions = require("../actions/actions");

var FullPostContainer = require("./full-post-container");
var PostFormContainer = require("./post-form-container");
var PostListContainer = require("./post-list-container");

var Admin = React.createClass({
  componentDidMount:function(){
    this.props.dispatch(actions.fetchAllPosts());
  },
  render: function(){
    return(
      <div>
        {this.props.children}
        <PostFormContainer />
        <PostListContainer />
      </div>
    );
  }
});


var AdminContainer = connect()(Admin);

module.exports = AdminContainer;