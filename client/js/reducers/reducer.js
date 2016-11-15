var React = require("react");

var initialState = {
  formData: {
    subjectBox: "",
    bodyBox: "",
    imgBox: ""
  },
  displayPost:{},
  fullPostClass:"hide-it",
  posts:{}
};

var actions = require("../actions/actions");

var reducer = function(state, action){
  state = state || initialState;
  console.log(action);
  switch(action.type){
    case actions.CLEAR_FORM:
      return Object.assign({}, state, {formData: initialState.formData});
    case actions.FETCH_ALL_POSTS_SUCCESS:
      return Object.assign({}, state, {posts: action.posts});
    case actions.FETCH_FULL_POST_SUCCESS:
      return Object.assign( {}, state, {displayPost: action.post}, 
                            {fullPostClass: "display-it"});
    default: 
      return state;
  }
}

module.exports = reducer;