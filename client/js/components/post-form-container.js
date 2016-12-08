var React = require("react");
var connect = require("react-redux").connect;

var PostForm = require("./post-form");

var mapStateToProps = function(state, props) {
  return {
    formSubject: state.formData.subject,
    formBody: state.formData.body,
    formImg: state.formData.img,
    postId: state.formData._id,
    editMode: state.editMode
  }
}

var PostFormContainer = connect(mapStateToProps)(PostForm);

module.exports = PostFormContainer; 
