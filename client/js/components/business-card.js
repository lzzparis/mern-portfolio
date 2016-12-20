var React = require("react");

var BusinessCard = React.createClass({
  getInitialState: function(){
    return {
      image: "http://gravatar.com/avatar/de0e6cc0e078cd704014b08123c385e9",
      imageSize: 400,
      name: "Lizzie Paris",
      title: "Frontend Web Development",
      description: "I am a human person like you (probably). Like many other human people, I prefer to interact with beautiful, simple, intuitive interfaces. So I make that my goal in my projects, both in design and in development."
    };
  },
  render: function() {
    return (
      <div className="business-card">
        <img className="business-card-image" src={this.state.image+"?s="+this.state.imageSize}/>
        <h1 className="business-card-name">{this.state.name}</h1> 
        <h3 className="business-card-title">{this.state.title}</h3>
        <p className="business-card-description">{this.state.description}</p>
      </div>
    );
  }
});

module.exports = BusinessCard;