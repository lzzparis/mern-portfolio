var React = require("react");
var Link = require("react-redux").Link;

var Connect = React.createClass({
  render: function() {
    return (
      <div className="connect">
        <h2 className="connect-header">Get in Touch</h2>
        <ul className="connect-list">
          <li className="left connect-list-item">
            <a className="connect-list-item-link hover-bottom" href="https://github.com/lzzparis" target="_blank">Github</a>
          </li>
          <li className="right connect-list-item">
            <a className="connect-list-item-link hover-bottom" href="https://www.linkedin.com/in/lzzparis" target="_blank">LinkedIn</a>
          </li>
        </ul>
        <ul className="connect-list">
          <li className="left connect-list-item">
            <a className="connect-list-item-link hover-top" href="mailto:lzz.paris@gmail.com" target="_blank">Email</a>
          </li>
          <li className="right connect-list-item">
            <a className="connect-list-item-link hover-top" href="https://www.instagram.com/lzzparis/" target="_blank">Instagram</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Connect;
