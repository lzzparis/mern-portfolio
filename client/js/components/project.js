var React = require("react");

var Project = React.createClass({
  getInitialState: function(){
    return {hidden: "hidden"};
  },
  componentWillMount: function() {
    setTimeout(this.show(), this.props.timeout);
  },
  show: function() {
    this.setState({hidden: ""});
  },
  render: function() {
    return (
      <div className={"project" + this.state.hidden}>
        <a href={this.props.url} target="_blank">
          <img className="project-thumbnail" src={this.props.thumbnail} />
            <h2 className="project-content-name">{this.props.name}</h2>
            <p className="project-content-description">{this.props.description}</p>
        </a>
      </div>
    );
  }
});

module.exports = Project;