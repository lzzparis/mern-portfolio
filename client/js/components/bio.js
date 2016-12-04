var React = require("react");

var Bio = React.createClass({
  getInitialState: function() {
    return {
      header: "At your service",
      description: "I am a human person like you (probably). Like many other human people, I prefer to interact with beautiful, simple, intuitive interfaces. So I make that my goal in my projects, both in design and in development."
    }
  },
  render: function() {
    return (
      <div className="bio">
        <h2 className="bio-header">{this.state.header}</h2>
        <p className="bio-description">{this.state.description}</p>
      </div>
    );
  }
});

module.exports = Bio;