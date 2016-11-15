var React = require("react");

var actions = require("../actions/actions");

var PostForm = React.createClass({
  getInitialState: function(){
    return {
      formSubject:"",
      formBody:"",
      formImg:""
    }
  },
  updateForm: function(){
    this.setState({
      formSubject: this.refs.subject.value,
      formBody: this.refs.body.value,
      formImg: this.refs.img.value
    })
  },
  formClear: function(e){
    e.preventDefault;
    this.props.dispatch(actions.clearForm());
    this.setState({
      formSubject:"",
      formBody:"",
      formImg:""
    });
  },
  render:function(){
    return(
      <div className="half-width left">
        <h1>Create Post</h1>
        <form id="post-form" name="" onChange={this.updateForm}>
          Title<span className="subject-warning"></span><br />
          <input className="form-field subject-box" type="text" ref="subject" value={this.state.formSubject}/><br />
          Body<br />
          <textarea className="form-field body-box" ref="body" value={this.state.formBody}></textarea><br />
          Image<br />
          <input className="form-field img-box" ref="img" value={this.state.formImg} /><br />
          <input type="submit" className="btn submit-btn" />
          <button className="btn clear-btn" onClick={this.formClear}>Clear</button>
        </form> 
      </div>
    );
  }
});


module.exports = PostForm;