var React = require("react");
var router = require("react-router");
var hashHistory = router.hashHistory; 

var actions = require("../actions/actions");

var EmptyPost = function() {
  return {
    _id: null,
    subject: "",
    body: "",
    img: "",
    timestamp: null
  };
};

var ErrorPost = function() {
  return {
    _id: 0,
    subject: "Sorry!",
    body: "I couldn't find any posts...",
    img: "https://images.unsplash.com/photo-1444005233317-7fb24f0da789",
    timestamp: new Date()
  };
};

var initialState = {
  userInitialized: false,
  isAuthenticated: false,
  failedAuthentication: false,
  formData: new EmptyPost(),
  displayPost:{},
  posts:[],
  drafts: [],
  editMode: false
};

var reducer = function(state, action) {
  state = state || initialState;
  switch(action.type) {
    case actions.FETCH_USER_STATUS_SUCCESS:
      return Object.assign({}, state, {userInitialized: action.value});
    case actions.AUTHENTICATE_USER_SUCCESS:
      return Object.assign({}, state, {isAuthenticated: true}, {failedAuthentication: false});
    case actions.AUTHENTICATE_USER_FAILURE:
      return Object.assign({}, state, {failedAuthentication: true});
    case actions.RESET_FORM:
      return Object.assign({}, state, {formData: new EmptyPost()}, {editMode: false});
    case actions.FETCH_ALL_PUBLISHED_SUCCESS:
      return Object.assign({}, state, {posts: action.posts});
    case actions.FETCH_ALL_DRAFTS_SUCCESS:
      return Object.assign({}, state, {drafts: action.posts});
    case actions.FETCH_ALL_POSTS_FAILURE:
      return Object.assign({}, state, {posts: [new ErrorPost()]});
    case actions.FETCH_FULL_POST_DISPLAY:
      return Object.assign( {}, state, {displayPost: action.post}); 
    case actions.FETCH_FULL_POST_EDIT:
      return Object.assign( {}, state, {formData: action.post}, {editMode: true}); 
    default: 
      return state;
  }
}

module.exports = reducer;
