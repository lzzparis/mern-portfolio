var fetch = require("isomorphic-fetch");

var CLEAR_FORM = "CLEAR_FORM";
var clearForm = function(){
  return {
    type: CLEAR_FORM
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
      console.log(error);
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
      console.log(data);
      return dispatch(fetchAllPosts()); 
    }); 
  }
}


exports.CLEAR_FORM = CLEAR_FORM;
exports.clearForm = clearForm; 
exports.fetchAllPosts = fetchAllPosts;
exports.FETCH_ALL_POSTS_SUCCESS = FETCH_ALL_POSTS_SUCCESS;
exports.createPost = createPost;