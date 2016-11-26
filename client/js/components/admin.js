var React = require("react");
var connect = require("react-redux").connect;
var router = require("react-router");
var hashHistory = router.hashHistory;
var Link = router.Link;

var actions = require("../actions/actions");

var PostFormContainer = require("./post-form-container");
var PostListContainer = require("./post-list-container");

var Admin = React.createClass({
  componentDidMount:function(){
    if(!this.props.isAuthenticated){
      hashHistory.push("/login");
    }
    this.props.dispatch(actions.fetchAllPosts());
  },
  render: function(){
    return(
      <div>
        {this.props.children}
        <PostFormContainer />
        <PostListContainer />
        <div className="clear-fix"></div>
        <Link className="subtle-link" to="/">&#8606; home</Link> 
      </div>
    );
  }
});

var mapStateToProps = function(state, props){
  return {
    isAuthenticated: state.isAuthenticated
  };
};

var AdminContainer = connect(mapStateToProps)(Admin);

module.exports = AdminContainer;