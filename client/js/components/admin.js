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
      hashHistory.push("/blog/login");
    }
    this.props.dispatch(actions.modifyNavItemClass("admin"));
    this.props.dispatch(actions.fetchAllPosts("modified/newest"));
  },
  render: function() {
    if(this.props.isAuthenticated){
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
    } else {
      return (<div></div>);
    }
  }
});

module.exports = Admin;
