var React = require("react");
var connect = require("react-redux").connect;
var router = require("react-router");
var hashHistory = router.hashHistory;
var Link = router.Link;

var actions = require("../actions/actions");

var PostFormContainer = require("./post-form-container");
var PostListContainer = require("./post-list-container");
var DraftListContainer = require("./draft-list-container");

var Admin = React.createClass({
  componentDidMount:function() {
    if(!this.props.isAuthenticated) {
      hashHistory.push("/login");
    }
    this.props.dispatch(actions.fetchAllPosts());
  },
  render: function() {
    return(
      <div className="admin">
        {this.props.children}
        <PostFormContainer />
        <DraftListContainer />
        <PostListContainer />
        <div className="clear-fix"></div>
        <Link className="link-home admin-link-home" to="/">&#8606; home</Link> 
      </div>
    );
  }
});

module.exports = Admin;
