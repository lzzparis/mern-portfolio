var React = require("react");
var router = require("react-router");
var hashHistory = router.hashHistory; 

var actions = require("../actions/actions");

var EmptyPost = function(){
  return {
    _id: null,
    subject: "",
    body: "",
    img: "",
    timestamp: new Date()
  };
};

var initialState = {
  userInitialized: false,
  isAuthenticated: false,
  failedAuthentication: false,
  formData: new EmptyPost(),
  displayPost:{},
  posts:{},
  editMode: false
};

var reducer = function(state, action){
  console.log(action);
  state = state || initialState;
  switch(action.type){
    case actions.FETCH_USER_STATUS_SUCCESS:
      return Object.assign({}, state, {userInitialized: action.value});
    case actions.AUTHENTICATE_USER_SUCCESS:
      return Object.assign({}, state, {isAuthenticated: true}, {failedAuthentication: false});
    case actions.AUTHENTICATE_USER_FAILURE:
      return Object.assign({}, state, {failedAuthentication: true});
    case actions.RESET_FORM:
      return Object.assign({}, state, {formData: new EmptyPost()});
    case actions.FETCH_ALL_POSTS_SUCCESS:
      return Object.assign({}, state, {posts: action.posts}, {editMode: false});
    case actions.FETCH_FULL_POST_DISPLAY:
      return Object.assign( {}, state, {displayPost: action.post}); 
    case actions.FETCH_FULL_POST_EDIT:
      return Object.assign( {}, state, {formData: action.post}, {editMode: true}); 
    default: 
      return state;
  }
}

module.exports = reducer;