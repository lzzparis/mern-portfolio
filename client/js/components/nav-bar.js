var React = require("react");
var Link = require("react-router").Link;

var NavBar = function() {
  return (
    <ul className="nav-bar-list">
      <Link to="/"><li className="nav-bar-list-item">Home</li></Link>
      <Link to="/bio"><li className="nav-bar-list-item">Bio</li></Link>
      <Link to="/projects"><li className="nav-bar-list-item">Projects</li></Link>
      <Link to="/contact"><li className="nav-bar-list-item">Contact</li></Link>
    </ul>
  );
};

module.exports = NavBar;
