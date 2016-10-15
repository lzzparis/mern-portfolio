
$(document).ready(function(){
  var postList = $("#post-list");
  var postForm = $("#post-form");

//get full post
var getFullPost = function(id,successHandle){
  $.ajax("/"+id,{
    type:"GET",
    dataType: "json",
    contentType: "application/json"
  })
  .done(successHandle);
}

var populatePostForm = function(post){
  postForm.children(".subject-box").val(post.subject);
  postForm.children(".body-box").val(post.body);
  postForm.attr("name",post._id);
}

var fullPostBox = $("#full-post");

var displayPost = function(post){
  fullPostBox.children(".subject-header").text(post.subject);
  fullPostBox.children(".body-content").text(post.body);
  fullPostBox.css("display","block");
}
var closePost = function(){
  fullPostBox.children(".subject-header").text("");
  fullPostBox.children(".body-content").text("");
  fullPostBox.css("display","none");

}
fullPostBox.children(".close-x").on("click",closePost);

//View summary of posts
var listSinglePost = function(post){
  var prettyTime = moment(post.timestamp).format("MM-DD-YYYY @ h:mm a");
  var postSummaryTemplate = $(".templates > .post-summary").clone();
  postSummaryTemplate.attr("id",post._id);
  postSummaryTemplate.children(".post-info").text(post.subject+" .... "+prettyTime);
  postList.append(postSummaryTemplate);  
}

var listAllPosts = function(){
  $.ajax("/all",{
    type:"GET",
    dataType: "json",
    contentType: "application/json"
  })
  .done(function(allPosts){
    postList.html("");
    allPosts.forEach(listSinglePost);
  });
}

//Author post
var postPost = function(post, allPosts){
  allPosts.push(post);
}

var errorHandler = function(jqXHR, error){
  console.log(jqXHR);
  console.log(error);
}

var createPost = function(subject, body){
  var post = {
    subject:subject, 
    body:body
  };

  $.ajax("/",{
    type:"POST",
    data: JSON.stringify(post),
    dataType: "json",
    contentType: "application/json"
  })
  .done(listAllPosts);

}
//Edit post


var updatePost = function(id,subject,body){
  var post = {
    subject:subject,
    body:body
  }
  $.ajax("/"+id,{
    type:"PUT",
    data: JSON.stringify(post),
    dataType: "json",
    contentType: "application/json"
  })
  .done(listAllPosts);
}

//Delete post
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

}

$(".clear-btn").on("click", clearForm);

postForm.on("submit",function(event){
  event.preventDefault();
  var subject = $(this).children(".subject-box").val();
  var body = $(this).children(".body-box").val();

  var id = $(this).attr("name");

  if(id ==undefined){
    createPost(subject,body);
  }
  else{
    updatePost(id, subject, body);
  }
  clearForm();
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

listAllPosts();


});

