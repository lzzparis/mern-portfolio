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
    created: null,
    modified: null
  };
};

var ErrorPost = function() {
  return {
    _id: 0,
    subject: "Sorry!",
    body: "I couldn't find any posts...",
    img: "https://images.unsplash.com/photo-1444005233317-7fb24f0da789",
    created: new Date(),
    modified: new Date()
  };
};

var InactiveNavClasses = function() {
  return {
    home: "inactive-nav-bar-list-item",
    projects: "inactive-nav-bar-list-item",
    connect: "inactive-nav-bar-list-item",
    blog: "inactive-nav-bar-list-item",
    admin: "inactive-nav-bar-list-item"
  }
}

var initialState = {
  navClasses: new InactiveNavClasses(),
  userInitialized: false,
  isAuthenticated: false,
  failedAuthentication: false,
  formData: new EmptyPost(),
  displayPost:{},
  posts:[],
  drafts: [],
  editMode: false
};

var activateClass = function(item) {
  var activatedClass = new InactiveNavClasses();
  activatedClass[item] = "active-nav-bar-list-item";
  return activatedClass;
}

var reducer = function(state, action) {
  state = state || initialState;
  switch(action.type) {
    case actions.MODIFY_NAV_ITEM_CLASS:
      var myState = Object.assign({}, state, {navClasses: activateClass(action.item)});
      return myState;
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
    case actions.STORE_FULL_POST_DISPLAY:
      return Object.assign( {}, state, {displayPost: action.post}); 
    case actions.STORE_FULL_POST_EDIT:
      return Object.assign( {}, state, {formData: action.post}, {editMode: true}); 
    case actions.SET_EDIT_MODE:
      return Object.assign( {}, state, {editMode: true}); 
    default: 
      return state;
  }
}

module.exports = reducer;
