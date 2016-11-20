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
  authenticate: function(event) {
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    this.props.dispatch(actions.authenticateUser(username, password));
    console.log(event);
  },
  render: function() {
    return (
      <div>
        <h1>WHOA</h1>
        <h3>ur not going anywhere till you authenticate, fool.</h3>
        <form className="login-form" onSubmit={this.authenticate}>
          <input type="text" ref="username" placeholder="Username" /><br />
          <input type="text" ref="password" placeholder="Password" /><br />
          <input type="submit" value="Submit" /> 
        </form>
      </div>
    );
  }
});

module.exports = Login;