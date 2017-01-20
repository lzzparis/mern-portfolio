var React = require("react");

var actions = require("../actions/actions");

var PostForm = React.createClass({
  getInitialState: function() {
    return {
      formSubject: "",
      formBody: "",
      formImg: "",
      postId: null,
      errorMessage: ""
    }
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      formSubject: nextProps.formSubject,
      formBody: nextProps.formBody,
      formImg: nextProps.formImg,
      postId: nextProps.postId
    });
  },
  updateForm: function() {
    this.setState({
      formSubject: this.refs.subject.value,
      formBody: this.refs.body.value,
      formImg: this.refs.img.value
    })
  },
  formClear: function(e) {
    e.preventDefault();
    this.props.dispatch(actions.resetForm());
    this.setState({
      formSubject: "",
      formBody: "",
      formImg: "",
      postId: null
    });
  },
  formSubmit: function(post) {
    if (post.subject == "") {
      this.setState({
        errorMessage: "* required"
      });
    } else {
      if (this.props.editMode) {
        post._id = this.state.postId;
        this.props.dispatch(actions.updatePost(post));
      } else {
        this.props.dispatch(actions.createPost(post));
      }
    }
  },
  submitPost: function(e) {
    e.preventDefault();
    var post = {
      subject: this.state.formSubject, 
      body: this.state.formBody,
      img: this.state.formImg,
      draft: false
    };
    this.formSubmit(post);
  },
  saveDraft: function(e) {
    e.preventDefault();
    var post = {
      subject: this.state.formSubject, 
      body: this.state.formBody,
      img: this.state.formImg,
      draft: true 
    };
    this.formSubmit(post);
  },
  render:function() {
    var clearButtonText = null;
    if (this.props.editMode) {
      clearButtonText = "Cancel";
    } else {
      clearButtonText = "Clear";
    }
    return(
      <div className="post-form-wrapper left">
        <h1 className="header post-form-header">Create Post</h1>
        <form className="form post-form" name="" onChange={this.updateForm}>
          Title<span className="form-error post-form-error">{this.state.errorMessage}</span><br />
          <input className="form-field post-form-field post-form-subject" type="text" ref="subject" value={this.state.formSubject} /><br />
          Body<br />
          <textarea className="form-field post-form-field post-form-body" ref="body" value={this.state.formBody}></textarea><br />
          Image <em>(type or copy/paste a URL)</em><br />
          <input className="form-field post-form-field post-form-img" ref="img" value={this.state.formImg} /><br />
          <input className="button form-button post-form-button post-form-submit" type="submit" onClick={this.submitPost} value="Submit" />
          <input className="button form-button post-form-button post-form-save" type="submit" onClick={this.saveDraft} value="Save Draft" />
          <button className="button form-button post-form-button post-form-clear" onClick={this.formClear}>{clearButtonText}</button>
        </form> 
      </div>
    );
  }
});


module.exports = PostForm;
