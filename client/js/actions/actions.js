var fetch = require("isomorphic-fetch");

var RESET_FORM = "RESET_FORM";
var resetForm = function(){
  return {
    type: RESET_FORM
  }
};

var FETCH_ALL_POSTS_SUCCESS = "FETCH_ALL_POSTS";
var fetchAllPostsSuccess = function(posts){
  return {
    type: FETCH_ALL_POSTS_SUCCESS,
    posts: posts 
  }
}

var fetchAllPosts = function(){
  return function(dispatch){
    var url = "/all";
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(url, {method: "GET", headers: headers})
    .then(function(response){
      return response.json();
    })
    .then(function(allPosts){
      return dispatch(fetchAllPostsSuccess(allPosts));
    })
    .catch(function(error){
      console.error(error);
    });  
  }
}

var createPost = function(post){
  return function(dispatch){
    var body = JSON.stringify(post);

    var url = "/";
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(url, {method: "POST", headers: headers, body:body})
    .then(function(response){

      return response.json();
    })
    .then(function(data){
      return dispatch(fetchAllPosts()); 
    }); 
  }
};

var FETCH_FULL_POST_SUCCESS = "FETCH_FULL_POST_SUCCESS";
var fetchFullPostSuccess = function(post){
  return {
    type: FETCH_FULL_POST_SUCCESS,
    post: post
  }
}

var fetchFullPost = function(id){
  return function(dispatch){
    var url = "/"+id;
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(url, {method: "GET", headers: headers})
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      return dispatch(fetchFullPostSuccess(data));
    })
    .catch(function(error){
      console.error(error);
    });
  }
}


exports.RESET_FORM = RESET_FORM;
exports.resetForm = resetForm; 
exports.fetchAllPosts = fetchAllPosts;
exports.FETCH_ALL_POSTS_SUCCESS = FETCH_ALL_POSTS_SUCCESS;
exports.createPost = createPost;
exports.fetchFullPost = fetchFullPost;
exports.FETCH_FULL_POST_SUCCESS = FETCH_FULL_POST_SUCCESS;