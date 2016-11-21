var React = require("react");
var connect = require("react-redux").connect;
var router = require("react-router");
var hashHistory = router.hashHistory; 

var actions = require("../actions/actions");

var Login = React.createClass({
  componentDidMount: function(){
    this.props.dispatch(actions.fetchUserStatus());
  },
  componentWillReceiveProps: function(nextProps){
    if(nextProps.isAuthenticated){
      hashHistory.push("/admin");
    }
  },
  authenticate: function(event) {
    event.preventDefault();
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    if(this.props.userInitialized){
      this.props.dispatch(actions.authenticateUser(username, password));
    } else {
      this.props.dispatch(actions.initUser(username, password));
    }
    console.log(event);
  },
  render: function() {
    if(this.props.userInitialized){
      var headerText = "Login";  
    } else {
      var headerText = "Create User";
    }

    return (
      <div>
        <h1>{headerText}</h1>
        <form className="login-form" onSubmit={this.authenticate}>
          <input type="text" ref="username" placeholder="Username" /><br />
          <input type="password" ref="password" placeholder="Password" /><br />
          <input type="submit" value="Submit" /> 
        </form>
      </div>
    );
  }
});

module.exports = Login;