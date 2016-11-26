var React = require("react");
var connect = require("react-redux").connect;
var router = require("react-router");
var hashHistory = router.hashHistory; 

var actions = require("../actions/actions");

var App = React.createClass({
  componentDidMount: function(){
    this.props.dispatch(actions.fetchUserStatus());
  }, 
  render: function(){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
});


var AppContainer = connect()(App);

module.exports = AppContainer;