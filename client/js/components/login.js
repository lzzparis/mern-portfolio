var React = require("react");
var connect = require("react-redux").connect;
var router = require("react-router");

var actions = require("../actions/actions");

var Login = React.createClass({
  authenticate: function() {
    this.props.dispatch(actions.authenticateUser(true));
  },
  render: function() {
    return (
      <div>
        <h1>WHOA</h1>
        <h3>ur not going anywhere till you authenticate, fool.</h3>
        <button onClick={this.authenticate}>Authenticate this!</button>
      </div>
    );
  }
});

var LoginContainer = connect()(Login);

module.exports = LoginContainer;