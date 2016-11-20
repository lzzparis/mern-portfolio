var React = require("react");
var connect = require("react-redux").connect;
var router = require("react-router");
var hashHistory = router.hashHistory; 

var actions = require("../actions/actions");

var Login = React.createClass({
  componentDidMount: function(){
     this.props.dispatch(actions.initUser());
  },
  componentWillReceiveProps: function(nextProps){
    if(nextProps.isAuthenticated){
      hashHistory.push("/admin");
    }
  },
  authenticate: function() {
    this.props.dispatch(actions.authenticateUser("user", "pass"));
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

module.exports = Login;