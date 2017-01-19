var fetch = require("isomorphic-fetch");
var router = require("react-router");
var hashHistory = router.hashHistory; 


var INIT_USER_SUCCESS = "INIT_USER_SUCCESS";
var initUserSuccess = function() {
  return {
    type: INIT_USER_SUCCESS
  }
};

var FETCH_USER_STATUS_SUCCESS = "FETCH_USER_STATUS_SUCCESS";
var fetchUserStatusSuccess = function(value) {
  return {
    type: FETCH_USER_STATUS_SUCCESS,
    value: value
  }
};
var FETCH_USER_STATUS_ERROR = "FETCH_USER_STATUS_ERROR";
var fetchUserStatusError = function() {
  return {
    type: FETCH_USER_STATUS_ERROR
  }
};

var fetchUserStatus = function() {
  return function(dispatch) {
    var url = "/user";
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(url, {method:"GET", headers: headers})
    .then(function(response) {
      if(response.status < 200 || response.status >=300) {
        throw error;
      }
      return response;
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if(data.message == "true") {
        return dispatch(fetchUserStatusSuccess(true));
      } else {
        return dispatch(fetchUserStatusSuccess(false));
      }
    })
    .catch(function(error) {
      console.error(error);
    })
  }
}

var initUser = function(username, password) {
  return function(dispatch) {
    var url = "/user";
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    var data = {
      username: username,
      password: password
    }
    var body = JSON.stringify(data);

    fetch(url, {method:"POST", headers: headers, body: body})
    .then(function(response) {
      if(response.status < 200 || response.status >=300) {
        throw error;
      }
      return;
    })
  }
}

var AUTHENTICATE_USER_SUCCESS = "AUTHENTICATE_USER_SUCCESS";
var authenticateUserSuccess = function() {
  return {
    type: AUTHENTICATE_USER_SUCCESS
  };
};

var AUTHENTICATE_USER_FAILURE = "AUTHENTICATE_USER_FAILURE";
var authenticateUserFailure = function() {
  return {
    type: AUTHENTICATE_USER_FAILURE
  };
};


var AUTHENTICATE_USER_ERROR = "AUTHENTICATE_USER_ERROR";
var authenticateUserError = function() {
  return {
    type: AUTHENTICATE_USER_ERROR
  };
};

var authenticateUser = function(username, password) {
  return function(dispatch) {
    var url = "/login";
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    var data = {
      username: username, 
      password: password
    };
    var body = JSON.stringify(data);

//TODO - is this the right method to use??
    fetch(url, {method: "POST", headers: headers, body: body})
    .then(function(response) {
      if (response.status == 401) {
        return dispatch(authenticateUserFailure());
      } else if (response.status == 200) {
        return dispatch(authenticateUserSuccess());
      } else {
        return dispatch(authenticateUserError());
      }
    });
  };
};

var RESET_FORM = "RESET_FORM";
var resetForm = function() {
  return {
    type: RESET_FORM
  }
};

var FETCH_ALL_PUBLISHED_SUCCESS = "FETCH_ALL_PUBLISHED_SUCCESS";
var fetchAllPublishedSuccess = function(posts) {
  return {
    type: FETCH_ALL_PUBLISHED_SUCCESS,
    posts: posts 
  }
}
var FETCH_ALL_DRAFTS_SUCCESS = "FETCH_ALL_DRAFTS_SUCCESS";
var fetchAllDraftsSuccess = function(posts) {
  return {
    type: FETCH_ALL_DRAFTS_SUCCESS,
    posts: posts 
  }
}
var FETCH_ALL_POSTS_FAILURE = "FETCH_ALL_POSTS_FAILURE";
var fetchAllPostsFailure = function() {
  return {
    type: FETCH_ALL_POSTS_FAILURE
  }
}



var fetchAllPublished = function(sortUri) {
  return function(dispatch) {
    var url = "/post/published/"+sortUri;
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    
    fetch(url, {method: "GET", headers: headers})
    .then(function(response) {
      return response.json();
    })
    .then(function(allPublished) {
      return dispatch(fetchAllPublishedSuccess(allPublished));
    })
    .catch(function(error) {
      console.error(error);
    });  
  }
}

var fetchAllDrafts = function(sortUri) {
  return function(dispatch) {
    var url = "/post/drafts/"+sortUri;
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(url, {method: "GET", headers: headers})
    .then(function(response) {
      return response.json();
    })
    .then(function(allDrafts) {
      return dispatch(fetchAllDraftsSuccess(allDrafts));
    })
    .catch(function(error) {
      console.error(error);
    });  
  }
}

var fetchAllPosts = function(sortUri) {
  return function(dispatch) {
    if(sortUri == null) {
      sortUri = "modified/newest";
    }
    dispatch(fetchAllPublished(sortUri));
    dispatch(fetchAllDrafts(sortUri));
  }
}


var FETCH_FULL_POST_DISPLAY = "FETCH_FULL_POST_DISPLAY";
var STORE_FULL_POST_DISPLAY = "STORE_FULL_POST_DISPLAY";
var storeFullPostDisplay = function(post) {
  return {
    type: STORE_FULL_POST_DISPLAY,
    post: post
  };
};

var FETCH_FULL_POST_EDIT = "FETCH_FULL_POST_EDIT";
var STORE_FULL_POST_EDIT = "STORE_FULL_POST_EDIT";
var storeFullPostEdit = function(post) {
  return {
    type: STORE_FULL_POST_EDIT,
    post: post
  };
};

var SET_EDIT_MODE = "SET_EDIT_MODE";
var setEditMode = function() {
  return {
    type: SET_EDIT_MODE
  };
};

var fetchFullPost = function(id, type) {
  return function(dispatch) {
    var url = "/post/"+id;
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
        return dispatch(storeFullPostEdit(data));
      } else if (type === FETCH_FULL_POST_DISPLAY) {
        return dispatch(storeFullPostDisplay(data));
      } else {
        throw "Error: Invalid fetch type";
      }
    })
    .catch(function(error) {
      console.error(error);
    });
  }
}


var createPost = function(post) {
  return function(dispatch) {
    var body = JSON.stringify(post);

    var url = "/post";
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(url, {method: "POST", headers: headers, body:body})
    .then(function(response) {
      if(response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .then(function(data) {
      if(post.draft) {
        dispatch(storeFullPostEdit(data));
      }
      return dispatch(fetchAllPosts()); 
    })
    .then(function(data) {
      if(!post.draft) {
        dispatch(resetForm());
      }
    })
    .catch(function(error) {
      alert("WARNING - Could not connect to the database. "+
        "(Perhaps you are disconnected from the internet.) "+
        "Please save your work locally and resubmit later.");
    }); 
  }
};

var updatePost = function(post) {
  return function(dispatch) {
    var data = JSON.stringify(post);
    var url = "/post/"+post._id;
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(url, {method: "PUT", headers: headers, body:data})
    .then(function(response) {
      if(response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .then(function(data) {
      if(!post.draft) {
        dispatch(resetForm());
      }
    })
    .then(function() {
        dispatch(fetchAllPosts()); 
    })
    .catch(function(error){
      alert("WARNING - Could not connect to the database. "+
        "(Perhaps you are disconnected from the internet.) "+
        "Please save your work locally and resubmit later.");
    }); 
  };
};

var deletePost = function(id) {
  return function(dispatch) {
    var url = "/post/"+id;
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

exports.fetchUserStatusSuccess = fetchUserStatusSuccess;
exports.FETCH_USER_STATUS_SUCCESS = FETCH_USER_STATUS_SUCCESS;
exports.fetchUserStatus = fetchUserStatus;

exports.initUser = initUser;

exports.authenticateUserSuccess = authenticateUserSuccess;
exports.AUTHENTICATE_USER_SUCCESS = AUTHENTICATE_USER_SUCCESS;
exports.authenticateUserFailure = authenticateUserFailure;
exports.AUTHENTICATE_USER_FAILURE = AUTHENTICATE_USER_FAILURE;
exports.authenticateUser = authenticateUser;

exports.RESET_FORM = RESET_FORM;
exports.resetForm = resetForm; 

exports.fetchAllPosts = fetchAllPosts;
exports.fetchAllPublishedSuccess = fetchAllPublishedSuccess;
exports.FETCH_ALL_PUBLISHED_SUCCESS = FETCH_ALL_PUBLISHED_SUCCESS;
exports.fetchAllDraftsSuccess = fetchAllDraftsSuccess;
exports.FETCH_ALL_DRAFTS_SUCCESS = FETCH_ALL_DRAFTS_SUCCESS;
exports.fetchAllPostsFailure = fetchAllPostsFailure;
exports.FETCH_ALL_POSTS_FAILURE = FETCH_ALL_POSTS_FAILURE;

exports.fetchFullPost = fetchFullPost;
exports.storeFullPostDisplay = storeFullPostDisplay;
exports.STORE_FULL_POST_DISPLAY = STORE_FULL_POST_DISPLAY;
exports.FETCH_FULL_POST_DISPLAY = FETCH_FULL_POST_DISPLAY;
exports.storeFullPostEdit = storeFullPostEdit;
exports.STORE_FULL_POST_EDIT = STORE_FULL_POST_EDIT;
exports.FETCH_FULL_POST_EDIT = FETCH_FULL_POST_EDIT;
exports.setEditMode = setEditMode;
exports.SET_EDIT_MODE = SET_EDIT_MODE;

exports.createPost = createPost;

exports.updatePost = updatePost;

exports.deletePost = deletePost;

