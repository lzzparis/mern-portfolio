var React = require("react");
var Link = require("react-router").Link;
var router = require("react-router");
var hashHistory = router.hashHistory;

var actions = require("../actions/actions");

var NavBar = React.createClass({
  render: function() {
    return (
      <div className="nav-bar">
        <ul className="nav-bar-list">
          <Link to="/" >
            <li className={"nav-bar-list-item "+this.props.navClasses.home}>Home</li>
          </Link>
          <Link to="/projects" >
            <li className={"nav-bar-list-item "+this.props.navClasses.projects}>Projects</li>
          </Link>
          <Link to="/connect" >
            <li className={"nav-bar-list-item "+this.props.navClasses.connect}>Connect</li>
          </Link>
          <Link to="/blog/posts/latest" >
            <li className={"nav-bar-list-item "+this.props.navClasses.blog}>Blog</li>
          </Link>
          <Link to="/blog/login" >
            <li className={"nav-bar-list-item "+this.props.navClasses.admin}>Admin</li>
          </Link>
        </ul>
      </div>
    );
  }
});

module.exports = NavBar;
