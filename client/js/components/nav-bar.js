var React = require("react");
var Link = require("react-router").Link;

var NavBar = React.createClass({
  getInitialState: function() {
    return {
      homeClass: "active-nav-bar-list-item",
      projectsClass:  "inactive-nav-bar-list-item",
      connectClass: "inactive-nav-bar-list-item"
    };
  },
  setHomeActive: function() {
    this.setState(this.getInitialState());
  },
  setProjectsActive: function() {
    this.setState({
      homeClass: "inactive-nav-bar-list-item",
      projectsClass:  "active-nav-bar-list-item",
      connectClass: "inactive-nav-bar-list-item"      
    });
  },
  setConnectActive: function() {
    this.setState({
      homeClass: "inactive-nav-bar-list-item",
      projectsClass:  "inactive-nav-bar-list-item",
      connectClass: "active-nav-bar-list-item"      
    });
  },
  render: function() {
    return (
      <ul className="nav-bar-list">
        <Link to="/" onClick={this.setHomeActive}>
          <li className={"nav-bar-list-item "+this.state.homeClass}>Home</li>
        </Link>
        <Link to="/projects" onClick={this.setProjectsActive}>
          <li className={"nav-bar-list-item "+this.state.projectsClass}>Projects</li>
        </Link>
        <Link to="/connect" onClick={this.setConnectActive}>
          <li className={"nav-bar-list-item "+this.state.connectClass}>Connect</li>
        </Link>
      </ul>
    );
  }
});

module.exports = NavBar;
