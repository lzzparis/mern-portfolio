var React = require("react");

var actions = require("../actions/actions");

var PostForm = React.createClass({
  getInitialState: function(){
    return {
      formSubject: "",
      formBody: "",
      formImg: "",
      postId: null
    }
  },
  componentWillReceiveProps: function(nextProps){
    this.setState({
      formSubject: nextProps.formSubject,
      formBody: nextProps.formBody,
      formImg: nextProps.formImg,
      postId: nextProps.postId
    });
  },
  updateForm: function(){
    this.setState({
      formSubject: this.refs.subject.value,
      formBody: this.refs.body.value,
      formImg: this.refs.img.value
    })
  },
  formReset: function(){
    this.props.dispatch(actions.resetForm());
    this.setState({
      formSubject: "",
      formBody: "",
      formImg: "",
      postId: null
    });
  },
  formClear: function(e){
    e.preventDefault();
    this.formReset();
  },
  formSubmit: function(e){
    e.preventDefault();
    var post = {
      subject: this.state.formSubject, 
      body: this.state.formBody,
      img: this.state.formImg
    };
    if(this.props.editMode){
      post._id = this.state.postId;
      this.props.dispatch(actions.updatePost(post));
    }
    else {
      this.props.dispatch(actions.createPost(post));
    }
    this.formReset();
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
          <input type="submit" className="btn submit-btn" onClick={this.formSubmit} />
          <button className="btn clear-btn" onClick={this.formClear}>Clear</button>
        </form> 
      </div>
    );
  }
});


module.exports = PostForm;