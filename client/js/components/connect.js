var React = require("react");
var Link = require("react-redux").Link;

var Connect = React.createClass({
  render: function() {
    return (
      <div className="connect">
        <ul className="connect-list">
          <li className="connect-list-item"><a href="https://github.com/lzzparis">Github</a></li>
          <li className="connect-list-item"><a href="https://www.linkedin.com/in/lzzparis">LinkedIn</a></li>
          <li className="connect-list-item"><a href="https://www.instagram.com/lzzparis/">Insta</a></li>
          <li className="connect-list-item"><a href="mailto:lzz.paris@gmail.com">Mail</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = Connect;