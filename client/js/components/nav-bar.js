var React = require("react");
var Link = require("react-router").Link;

var NavBar = function() {
  return (
    <ul className="nav-bar-list">
      <li className="nav-bar-list-item"><Link to="/">Home</Link></li>
      <li className="nav-bar-list-item"><Link to="/bio">Bio</Link></li>
      <li className="nav-bar-list-item"><Link to="/projects">Projects</Link></li>
      <li className="nav-bar-list-item"><Link to="/contact">Contact</Link></li>
    </ul>
  );
};

module.exports = NavBar;
