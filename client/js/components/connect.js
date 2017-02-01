var React = require("react");
var Link = require("react-redux").Link;

var actions = require("../actions/actions");

var Connect = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(actions.modifyNavItemClass("connect"));
  },
  render: function() {
    return (
      <div className="connect">
        <h2 className="connect-header">Get in Touch</h2>
        <ul className="connect-list">
          <li className="text-left connect-list-item connect-list-item-left">
            <a className="connect-list-item-link hover-bottom" href="https://github.com/lzzparis" target="_blank">Github</a>
          </li>
          <li className="text-right connect-list-item connect-list-item-right">
            <a className="connect-list-item-link hover-bottom" href="https://www.linkedin.com/in/lzzparis" target="_blank">LinkedIn</a>
          </li>
        </ul>
        <ul className="connect-list">
          <li className="text-left connect-list-item connect-list-item-left">
            <a className="connect-list-item-link hover-top" href="mailto:lzz.paris@gmail.com" target="_blank">Email</a>
          </li>
          <li className="text-right connect-list-item connect-list-item-right">
            <a className="connect-list-item-link hover-top" href="https://www.instagram.com/lzzparis/" target="_blank">Instagram</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Connect;
