var React = require("react");
var should = require("chai").should();

var actions = require("../../client/js/actions/actions");
var reducer = require("../../client/js/reducers/reducer");
var POSTS = require("../sample-data");

var EmptyPost = function(){
  return {
    _id: 0,
    subject: "Sorry!",
    body: "I couldn't find any posts...",
    img: "https://images.unsplash.com/photo-1444005233317-7fb24f0da789",
    timestamp: new Date()
  };
};


describe("reducer", function() {
  it("should handle FETCH_USER_STATUS_SUCCESS", function(){
    var actualState = reducer({}, actions.fetchUserStatusSuccess(true));
    actualState = JSON.stringify(actualState);
    var expectedState = JSON.stringify({userInitialized: true});
    actualState.should.equal(expectedState);
  });
  it("should handle AUTHENTICATE_USER_SUCCESS", function(){
    var actualState = reducer({}, actions.authenticateUserSuccess());
    actualState = JSON.stringify(actualState);
    var expectedState = JSON.stringify({isAuthenticated: true, failedAuthentication: false});
    actualState.should.equal(expectedState);
  });
  it("should handle AUTHENTICATE_USER_FAILURE", function(){
    var actualState = reducer({}, actions.authenticateUserFailure());
    actualState = JSON.stringify(actualState);
    var expectedState = JSON.stringify({failedAuthentication: true});
    actualState.should.equal(expectedState);
  });
  it("should handle RESET_FORM", function(){
    var actualState = reducer({}, actions.resetForm());
    actualState.formData.timestamp = Math.floor(actualState.formData.timestamp);
    var expectedState = {formData: new EmptyPost(), editMode: false};
    expectedState.formData.timestamp = Math.floor(expectedState.formData.timestamp);
    //compensate for creation time delta
    if( Math.abs(expectedState.formData.timestamp - actualState.formData.timestamp) < 2){
      console.log("had to compensate");
      expectedState.formData.timestamp = actualState.formData.timestamp;
    }

    actualState = JSON.stringify(actualState);
    expectedState = JSON.stringify(expectedState);
    actualState.should.equal(expectedState);
  });
  it("should handle FETCH_ALL_POSTS_SUCCESS", function(){
    var actualState = reducer({}, actions.fetchAllPostsSuccess(POSTS));
    actualState = JSON.stringify(actualState); 
    var expectedState = JSON.stringify({posts: POSTS});
    actualState.should.equal(expectedState);
  });
  it("should handle FETCH_ALL_POSTS_FAILURE", function(){
    var actualState = reducer({}, actions.fetchAllPostsFailure());
    actualState.posts[0].timestamp = Math.floor(actualState.posts[0].timestamp);
    var expectedState = {posts: [new EmptyPost()]};
    expectedState.posts[0].timestamp = Math.floor(expectedState.posts[0].timestamp);
    //compensate for creation time delta
    if( Math.abs(expectedState.posts[0].timestamp - actualState.posts[0].timestamp) < 2){
      console.log("had to compensate");
      expectedState.posts[0].timestamp = actualState.posts[0].timestamp;
    }

    actualState = JSON.stringify(actualState);
    expectedState = JSON.stringify(expectedState);
    actualState.should.equal(expectedState);
  });
  it("should handle FETCH_FULL_POSTS_DISPLAY", function(){
    var selectedPost = POSTS[1];
    var actualState = reducer({}, actions.fetchFullPostDisplay(selectedPost));
    actualState = JSON.stringify(actualState); 
    var expectedState = JSON.stringify({displayPost: selectedPost});
    actualState.should.equal(expectedState);
  });
  it("should handle FETCH_FULL_POSTS_EDIT", function(){
    var selectedPost = POSTS[2];
    var actualState = reducer({}, actions.fetchFullPostEdit(selectedPost));
    actualState = JSON.stringify(actualState); 
    var expectedState = JSON.stringify({formData: selectedPost, editMode: true});
    actualState.should.equal(expectedState);
  });

});