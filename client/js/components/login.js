var React = require("react");
var connect = require("react-redux").connect;
var router = require("react-router");
var hashHistory = router.hashHistory; 
var Link = router.Link;

var actions = require("../actions/actions");

var Login = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(actions.modifyNavItemClass("admin"));
  },
  componentWillReceiveProps: function(nextProps) {
    if(nextProps.isAuthenticated) {
      hashHistory.replace("/blog/admin");
    }
  },
  authenticate: function(event) {
    event.preventDefault();
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    if(this.props.userInitialized) {
      this.props.dispatch(actions.authenticateUser(username, password));
    } else {
      this.props.dispatch(actions.initUser(username, password));
    }
  },
  render: function() {
    var headerText = null;
    var authError = null;
    if(this.props.userInitialized) {
      headerText = "Login";  
    } else {
      headerText = "Create User";
    }

    if(this.props.failedAuthentication) {
      authError = (
        <p className="form-error login-form-error">Sorry, that username/password combination is not recognized.</p>
      );
    }

    return (
      <div className="login">
        <img className="login-image" src="../../assets/name-stamped.png" />
        <form className="form login-form" onSubmit={this.authenticate}>
          {authError}
          <input className="form-field login-form-field login-form-field-username" type="text" ref="username" placeholder="Username" /><br />
          <input className="form-field login-form-field login-form-field-password" type="password" ref="password" placeholder="Password" /><br />
          <input className="button form-button login-form-button login-form-button-submit" type="submit" value="Login" /><br />
          <Link className="link-home login-form-link-home" to="/">cancel</Link> 
        </form>
      </div>
    );
  }
});

module.exports = Login;
