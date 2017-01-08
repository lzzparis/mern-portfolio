var React = require("react");
var should = require("chai").should();

var actions = require("../../client/js/actions/actions");
var reducer = require("../../client/js/reducers/reducer");
var POSTS = require("../sample-data");


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


describe("reducer", function() {
  it("should handle FETCH_USER_STATUS_SUCCESS", function() {
    var actualState = reducer({}, actions.fetchUserStatusSuccess(true));
    actualState = JSON.stringify(actualState);
    var expectedState = JSON.stringify({userInitialized: true});
    actualState.should.equal(expectedState);
  });
  it("should handle AUTHENTICATE_USER_SUCCESS", function() {
    var actualState = reducer({}, actions.authenticateUserSuccess());
    actualState = JSON.stringify(actualState);
    var expectedState = JSON.stringify({isAuthenticated: true, failedAuthentication: false});
    actualState.should.equal(expectedState);
  });
  it("should handle AUTHENTICATE_USER_FAILURE", function() {
    var actualState = reducer({}, actions.authenticateUserFailure());
    actualState = JSON.stringify(actualState);
    var expectedState = JSON.stringify({failedAuthentication: true});
    actualState.should.equal(expectedState);
  });
  it("should handle RESET_FORM", function() {
    var actualState = reducer({}, actions.resetForm());
    var expectedState = {formData: new EmptyPost(), editMode: false};

    actualState = JSON.stringify(actualState);
    expectedState = JSON.stringify(expectedState);
    actualState.should.equal(expectedState);
  });
  it("should handle FETCH_ALL_PUBLISHED_SUCCESS", function() {
    var actualState = reducer({}, actions.fetchAllPublishedSuccess(POSTS));
    actualState = JSON.stringify(actualState); 
    var expectedState = JSON.stringify({posts: POSTS});
    actualState.should.equal(expectedState);
  });
  it("should handle FETCH_ALL_DRAFTS_SUCCESS", function() {
    var actualState = reducer({}, actions.fetchAllDraftsSuccess(POSTS));
    actualState = JSON.stringify(actualState); 
    var expectedState = JSON.stringify({drafts: POSTS});
    actualState.should.equal(expectedState);
  });
  it("should handle FETCH_ALL_POSTS_FAILURE", function() {
    var actualState = reducer({}, actions.fetchAllPostsFailure());
    actualState.posts[0].created = Math.floor(actualState.posts[0].created);
    actualState.posts[0].modified = Math.floor(actualState.posts[0].modified);
    var expectedState = {posts: [new ErrorPost()]};
    expectedState.posts[0].created = Math.floor(expectedState.posts[0].created);
    expectedState.posts[0].modified = Math.floor(expectedState.posts[0].modified);
    //compensate for creation time delta
    if( Math.abs(expectedState.posts[0].created - actualState.posts[0].created) < 2) {
      console.log("had to compensate");
      expectedState.posts[0].created = actualState.posts[0].created;
    }
    if( Math.abs(expectedState.posts[0].modified - actualState.posts[0].modified) < 2) {
      console.log("had to compensate");
      expectedState.posts[0].modified = actualState.posts[0].modified;
    }
    actualState = JSON.stringify(actualState);
    expectedState = JSON.stringify(expectedState);
    actualState.should.equal(expectedState);
  });
  it("should handle STORE_FULL_POSTS_DISPLAY", function() {
    var selectedPost = POSTS[1];
    var actualState = reducer({}, actions.storeFullPostDisplay(selectedPost));
    actualState = JSON.stringify(actualState); 
    var expectedState = JSON.stringify({displayPost: selectedPost});
    actualState.should.equal(expectedState);
  });
  it("should handle STORE_FULL_POSTS_EDIT", function() {
    var selectedPost = POSTS[2];
    var actualState = reducer({}, actions.storeFullPostEdit(selectedPost));
    actualState = JSON.stringify(actualState); 
    var expectedState = JSON.stringify({formData: selectedPost, editMode: true});
    actualState.should.equal(expectedState);
  });

});
