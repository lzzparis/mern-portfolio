var fetch = require("isomorphic-fetch");

var AUTHENTICATE_USER = "AUTHENTICATE_USER";
var authenticateUser = function(value){
  return {
    type: AUTHENTICATE_USER,
    value: value
  };
};


var RESET_FORM = "RESET_FORM";
var resetForm = function() {
  return {
    type: RESET_FORM
  }
};

var FETCH_ALL_POSTS_SUCCESS = "FETCH_ALL_POSTS";
var fetchAllPostsSuccess = function(posts) {
  return {
    type: FETCH_ALL_POSTS_SUCCESS,
    posts: posts 
  }
}

var fetchAllPosts = function() {
  return function(dispatch) {
    var url = "/all";
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(url, {method: "GET", headers: headers})
    .then(function(response) {
      return response.json();
    })
    .then(function(allPosts) {
      return dispatch(fetchAllPostsSuccess(allPosts));
    })
    .catch(function(error) {
      console.error(error);
    });  
  }
}

var createPost = function(post) {
  return function(dispatch) {
    var body = JSON.stringify(post);

    var url = "/";
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(url, {method: "POST", headers: headers, body:body})
    .then(function(response) {

      return response.json();
    })
    .then(function(data) {
      return dispatch(fetchAllPosts()); 
    }); 
  }
};

var FETCH_FULL_POST_DISPLAY = "FETCH_FULL_POST_DISPLAY";
var fetchFullPostDisplay = function(post) {
  return {
    type: FETCH_FULL_POST_DISPLAY,
    post: post
  }
}

var FETCH_FULL_POST_EDIT = "FETCH_FULL_POST_EDIT";
var fetchFullPostEdit = function(post) {
  return {
    type: FETCH_FULL_POST_EDIT,
    post: post
  }
}

var fetchFullPost = function(id, type) {
  return function(dispatch) {
    var url = "/"+id;
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(url, {method: "GET", headers: headers})
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if(type === FETCH_FULL_POST_EDIT) {
        return dispatch(fetchFullPostEdit(data));
      } else if (type === FETCH_FULL_POST_DISPLAY) {
        return dispatch(fetchFullPostDisplay(data));
      } else {
        throw "Error: Invalid fetch type";
      }
    })
    .catch(function(error) {
      console.error(error);
    });
  }
}

var updatePost = function(post) {
  return function(dispatch){
    var data = JSON.stringify(post);
    var url = "/"+post._id;
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(url, {method: "PUT", headers: headers, body:data})
    .then(function(response){
      return response.json();
    })
    .then(function(){
        dispatch(fetchAllPosts()); 
    }); 
  };
};

var deletePost = function(id) {
  return function(dispatch) {
    var url = "/"+id;
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(url, {method: "DELETE", headers: headers})
    .then(function(response) {
      return response.json();
    })
    .then(function() {
      return dispatch(fetchAllPosts());
    }); 
  };
};

exports.AUTHENTICATE_USER = AUTHENTICATE_USER;
exports.authenticateUser = authenticateUser;
exports.RESET_FORM = RESET_FORM;
exports.resetForm = resetForm; 
exports.fetchAllPosts = fetchAllPosts;
exports.FETCH_ALL_POSTS_SUCCESS = FETCH_ALL_POSTS_SUCCESS;
exports.fetchFullPost = fetchFullPost;
exports.FETCH_FULL_POST_DISPLAY = FETCH_FULL_POST_DISPLAY;
exports.FETCH_FULL_POST_EDIT = FETCH_FULL_POST_EDIT;
exports.createPost = createPost;
exports.updatePost = updatePost;
exports.deletePost = deletePost;

