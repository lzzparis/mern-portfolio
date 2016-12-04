var React = require("react");

var BusinessCard = React.createClass({
  getInitialState: function(){
    return {
      name: "Lizzie Paris",
      title: "Frontend Web Development"
    };
  },
  render: function() {
    return (
      <div className="business-card">
        <h1 className="business-card-name">{this.state.name}</h1> 
        <h3 className="business-card-title">{this.state.title}</h3>
      </div>
    );
  }
});

module.exports = BusinessCard;