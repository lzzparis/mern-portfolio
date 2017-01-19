var React = require("react");
var Link = require("react-router").Link;
var router = require("react-router");
var hashHistory = router.hashHistory;

var NavBar = React.createClass({
  getInitialState: function() {
    return {
      homeClass: "inactive-nav-bar-list-item",
      projectsClass: "inactive-nav-bar-list-item",
      connectClass: "inactive-nav-bar-list-item",
      blogClass: "inactive-nav-bar-list-item",
      adminClass: "inactive-nav-bar-list-item",
    };
  },
  componentWillMount: function() {
    var currentLocation = hashHistory.getCurrentLocation().pathname;
    if (currentLocation.match(/projects/)) {
      this.setState({projectsClass: "active-nav-bar-list-item"});
    } else if (currentLocation.match(/connect/)) {
      this.setState({connectClass: "active-nav-bar-list-item"});
    } else if (currentLocation.indexOf("login") > -1 ||
               currentLocation.indexOf("admin") > -1 ) {
      this.setState({adminClass: "active-nav-bar-list-item"});
    } else if (currentLocation.indexOf("blog") > -1) {
      this.setState({blogClass: "active-nav-bar-list-item"});
    } else {
      this.setState({homeClass: "active-nav-bar-list-item"});
    }
  },
  setHomeActive: function() {
    this.setState({
      homeClass: "active-nav-bar-list-item",
      projectsClass:  "inactive-nav-bar-list-item",
      connectClass: "inactive-nav-bar-list-item",      
      blogClass: "inactive-nav-bar-list-item",
      adminClass: "inactive-nav-bar-list-item"      
    });
  },
  setProjectsActive: function() {
    this.setState({
      homeClass: "inactive-nav-bar-list-item",
      projectsClass:  "active-nav-bar-list-item",
      connectClass: "inactive-nav-bar-list-item",      
      blogClass: "inactive-nav-bar-list-item",
      adminClass: "inactive-nav-bar-list-item"         
    });
  },
  setConnectActive: function() {
    this.setState({
      homeClass: "inactive-nav-bar-list-item",
      projectsClass:  "inactive-nav-bar-list-item",
      connectClass: "active-nav-bar-list-item",      
      blogClass: "inactive-nav-bar-list-item",
      adminClass: "inactive-nav-bar-list-item"          
    });
  },
  setBlogActive: function() {
    this.setState({
      homeClass: "inactive-nav-bar-list-item",
      projectsClass:  "inactive-nav-bar-list-item",
      connectClass: "inactive-nav-bar-list-item",      
      blogClass: "active-nav-bar-list-item",
      adminClass: "inactive-nav-bar-list-item"          
    });
  },
  setAdminActive: function() {
    this.setState({
      homeClass: "inactive-nav-bar-list-item",
      projectsClass:  "inactive-nav-bar-list-item",
      connectClass: "inactive-nav-bar-list-item",      
      blogClass: "inactive-nav-bar-list-item",
      adminClass: "active-nav-bar-list-item",          
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
        <Link to="/blog/posts/latest" onClick={this.setBlogActive}>
          <li className={"nav-bar-list-item "+this.state.blogClass}>Blog</li>
        </Link>
        <Link to="/blog/login" onClick={this.setAdminActive}>
          <li className={"nav-bar-list-item "+this.state.adminClass}>Admin</li>
        </Link>
      </ul>
    );
  }
});

module.exports = NavBar;
