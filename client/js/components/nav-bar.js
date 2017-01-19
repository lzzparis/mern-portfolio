var React = require("react");
var Link = require("react-router").Link;
var router = require("react-router");
var hashHistory = router.hashHistory;

var actions = require("../actions/actions");

var NavBar = React.createClass({
  componentWillMount: function() {
    var currentLocation = hashHistory.getCurrentLocation().pathname;
    if (currentLocation.match(/projects/)) {
      this.props.dispatch(actions.modifyNavItemClass("projects"));
    } else if (currentLocation.match(/connect/)) {
      this.props.dispatch(actions.modifyNavItemClass("connect"));
    } else if (currentLocation.indexOf("login") > -1 ||
               currentLocation.indexOf("admin") > -1 ) {
      this.props.dispatch(actions.modifyNavItemClass("admin"));
    } else if (currentLocation.indexOf("blog") > -1) {
      this.props.dispatch(actions.modifyNavItemClass("blog"));
    } else {
    this.props.dispatch(actions.modifyNavItemClass("home"));
      this.props.dispatch(actions.modifyNavItemClass("home"));
    }
  },
  setHomeActive: function() {
    this.props.dispatch(actions.modifyNavItemClass("home"));
  },
  setProjectsActive: function() {
    this.props.dispatch(actions.modifyNavItemClass("projects"));
  },
  setConnectActive: function() {
    this.props.dispatch(actions.modifyNavItemClass("connect"));
  },
  setBlogActive: function() {
    this.props.dispatch(actions.modifyNavItemClass("blog"));
  },
  setAdminActive: function() {
    this.props.dispatch(actions.modifyNavItemClass("admin"));
  },
  render: function() {
    return (
      <ul className="nav-bar-list">
        <Link to="/" onClick={this.setHomeActive}>
          <li className={"nav-bar-list-item "+this.props.navClasses.home}>Home</li>
        </Link>
        <Link to="/projects" onClick={this.setProjectsActive}>
          <li className={"nav-bar-list-item "+this.props.navClasses.projects}>Projects</li>
        </Link>
        <Link to="/connect" onClick={this.setConnectActive}>
          <li className={"nav-bar-list-item "+this.props.navClasses.connect}>Connect</li>
        </Link>
        <Link to="/blog/posts/latest" onClick={this.setBlogActive}>
          <li className={"nav-bar-list-item "+this.props.navClasses.blog}>Blog</li>
        </Link>
        <Link to="/blog/login" onClick={this.setAdminActive}>
          <li className={"nav-bar-list-item "+this.props.navClasses.admin}>Admin</li>
        </Link>
      </ul>
    );
  }
});

module.exports = NavBar;
