var fetch = require("isomorphic-fetch");

$(document).ready(function(){
  var postList = $("#post-list");
  var postForm = $("#post-form");
  var fullPostBox = $("#full-post");

  var getFullPost = function(id,successHandle){
    // $.ajax("/"+id,{
    //   type:"GET",
    //   dataType: "json",
    //   contentType: "application/json"
    // })
    // .done(successHandle);
    var url = "/"+id;
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(url, {method: "GET", headers: headers})
    .then(function(response){
      return response.json();
    })
    .then(successHandle);
  }
  
  var populatePostForm = function(post){
    postForm.children(".subject-box").val(post.subject);
    postForm.children(".body-box").val(post.body);
    postForm.children(".img-box").val(post.img);
    postForm.attr("name",post._id);
  }
  
  var displayPost = function(post){
    fullPostBox.children(".subject-header").text(post.subject);
    fullPostBox.children(".body-content").html(post.body);
    fullPostBox.children(".image-content").attr("src",post.img);
    fullPostBox.css("display","block");
  }
  var closePost = function(){
    fullPostBox.children(".subject-header").text("");
    fullPostBox.children(".body-content").text("");
    fullPostBox.css("display","none");
  }
  
  fullPostBox.children(".close-x").on("click",closePost);
  
  var listSinglePost = function(post){
    var prettyTime = moment(post.timestamp).format("MM-DD-YYYY @ h:mm a");
    var postSummaryTemplate = $(".templates > .post-summary").clone();
    postSummaryTemplate.attr("id",post._id);
    postSummaryTemplate.children(".post-info").text(post.subject+" .... "+prettyTime);
    postList.append(postSummaryTemplate);  
  }
  
  var listAllPosts = function(){
    // $.ajax("/all",{
    //   type:"GET",
    //   dataType: "json",
    //   contentType: "application/json"
    // })
    // .done(function(allPosts){
    //   postList.html("");
    //   allPosts.forEach(listSinglePost);
    // });

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
      postList.html("");
      allPosts.forEach(listSinglePost);
    });  

  }
  
  var errorHandler = function(jqXHR, error){
    console.log(jqXHR);
    console.log(error);
  }
  
  var createPost = function(subject, body, img){
    var post = {
      subject:subject, 
      body:body,
      img:img
    };
    var data = JSON.stringify(post);
  
    // $.ajax("/",{
    //   type:"POST",
    //   data: JSON.stringify(post),
    //   dataType: "json",
    //   contentType: "application/json"
    // })
    // .done(listAllPosts);
    var url = "/";
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(url, {method: "POST", headers: headers, body:data})
    .then(function(response){
      return response.json();
    })
    .then(listAllPosts); 
  }
  
  var updatePost = function(id,subject,body,img){
    var post = {
      subject:subject,
      body:body,
      img:img
    }
    $.ajax("/"+id,{
      type:"PUT",
      data: JSON.stringify(post),
      dataType: "json",
      contentType: "application/json"
    })
    .done(listAllPosts);
  }
  
  var deletePost = function(id){
    $.ajax("/"+id,{
      type:"DELETE",
      dataType: "json",
      contentType: "application/json"
    })
    .done(listAllPosts);
  }
  
  var clearForm = function(){
    postForm.children(".subject-box").val("");
    postForm.children(".body-box").val("");
    postForm.children(".img-box").val("");
    postForm.attr("name","");
    $(".subject-warning").text("");
  
  }
  
  $(".clear-btn").on("click", function(event){
    event.preventDefault();
    clearForm();
  });
  
  $(".submit-btn").on("click",function(event){
    event.preventDefault();
    var subject = $(this).parent().children(".subject-box").val();
    var body = $(this).parent().children(".body-box").val();
    var img = $(this).parent().children(".img-box").val();
  
    var id = $(this).parent().attr("name");
  
    if(subject == ""){
      $(".subject-warning").text("* required field");
    }
    else{
      if(id == ""){
        createPost(subject,body,img);
      }
      else{
        updatePost(id, subject, body, img);
      }
      clearForm();
    }
  });
  
  $("#post-list").on("click",".post-summary > .post-info",function(){
    var id = $(this).parent().attr("id");
    getFullPost(id,displayPost);
  });
  
  $("#post-list").on("click",".post-summary > .edit",function(){
    var id = $(this).parent().attr("id");
    getFullPost(id, populatePostForm);
  });
  $("#post-list").on("click",".post-summary > .delete", function(){
    var id = $(this).parent().attr("id");
    deletePost(id);
  });
 
  //Display existing posts on page load 
  listAllPosts();
  
});

