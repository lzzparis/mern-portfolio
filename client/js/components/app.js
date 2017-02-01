var React = require("react");
var connect = require("react-redux").connect;
var router = require("react-router");
var hashHistory = router.hashHistory; 
var ReactCSSTransitionGroup = require("react-addons-css-transition-group");


var NavBarContainer = require("./nav-bar-container"); 

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <ReactCSSTransitionGroup transitionName="slide"
          component="div" transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={false} transitionLeave={false}>
          <NavBarContainer className="nav-bar" />
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="fade" 
          component="div"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnterTimeout={1500} 
          transitionLeaveTimeout={500}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

module.exports = App;
