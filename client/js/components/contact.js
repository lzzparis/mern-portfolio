var React = require("react");

var Contact = React.createClass({
  getInitialState: function() {
    return {
      stuff: "Email me"
    };
  },
  render: function() {
    return (
      <div className="contact">
        <p className="contact-text">{this.state.stuff}</p>
      </div>
    );
  }
});

module.exports = Contact;