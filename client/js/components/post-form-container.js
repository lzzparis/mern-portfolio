var React = require("react");
var connect = require("react-redux").connect;

var PostForm = require("./post-form");

var mapStateToProps = function(state, props){
  return {
    formSubject: state.formData.subjectBox,
    formBody: state.formData.bodyBox,
    formImg: state.formData.imgBox
  }
}

var PostFormContainer = connect(mapStateToProps)(PostForm);

module.exports = PostFormContainer; 