var React = require("react");
var Link = require("react-router").Link;

var NavBar = function() {
  return (
    <ul className="nav-bar-list">
      <Link to="/"><li className="nav-bar-list-item">Home</li></Link>
      <Link to="/projects"><li className="nav-bar-list-item">Projects</li></Link>
      <Link to="/connect"><li className="nav-bar-list-item">Connect</li></Link>
    </ul>
  );
};

module.exports = NavBar;
