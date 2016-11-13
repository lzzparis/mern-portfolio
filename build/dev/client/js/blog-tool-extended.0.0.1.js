/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
	$(document).ready(function () {
	  var postList = $("#post-list");
	  var postForm = $("#post-form");
	  var fullPostBox = $("#full-post");
	
	  var getFullPost = function (id, successHandle) {
	    $.ajax("/" + id, {
	      type: "GET",
	      dataType: "json",
	      contentType: "application/json"
	    }).done(successHandle);
	  };
	
	  var populatePostForm = function (post) {
	    postForm.children(".subject-box").val(post.subject);
	    postForm.children(".body-box").val(post.body);
	    postForm.children(".img-box").val(post.img);
	    postForm.attr("name", post._id);
	  };
	
	  var displayPost = function (post) {
	    fullPostBox.children(".subject-header").text(post.subject);
	    fullPostBox.children(".body-content").html(post.body);
	    fullPostBox.children(".image-content").attr("src", post.img);
	    fullPostBox.css("display", "block");
	  };
	  var closePost = function () {
	    fullPostBox.children(".subject-header").text("");
	    fullPostBox.children(".body-content").text("");
	    fullPostBox.css("display", "none");
	  };
	
	  fullPostBox.children(".close-x").on("click", closePost);
	
	  var listSinglePost = function (post) {
	    var prettyTime = moment(post.timestamp).format("MM-DD-YYYY @ h:mm a");
	    var postSummaryTemplate = $(".templates > .post-summary").clone();
	    postSummaryTemplate.attr("id", post._id);
	    postSummaryTemplate.children(".post-info").text(post.subject + " .... " + prettyTime);
	    postList.append(postSummaryTemplate);
	  };
	
	  var listAllPosts = function () {
	    $.ajax("/all", {
	      type: "GET",
	      dataType: "json",
	      contentType: "application/json"
	    }).done(function (allPosts) {
	      postList.html("");
	      allPosts.forEach(listSinglePost);
	    });
	  };
	
	  var errorHandler = function (jqXHR, error) {
	    console.log(jqXHR);
	    console.log(error);
	  };
	
	  var createPost = function (subject, body, img) {
	    var post = {
	      subject: subject,
	      body: body,
	      img: img
	    };
	
	    $.ajax("/", {
	      type: "POST",
	      data: JSON.stringify(post),
	      dataType: "json",
	      contentType: "application/json"
	    }).done(listAllPosts);
	  };
	
	  var updatePost = function (id, subject, body, img) {
	    var post = {
	      subject: subject,
	      body: body,
	      img: img
	    };
	    $.ajax("/" + id, {
	      type: "PUT",
	      data: JSON.stringify(post),
	      dataType: "json",
	      contentType: "application/json"
	    }).done(listAllPosts);
	  };
	
	  var deletePost = function (id) {
	    $.ajax("/" + id, {
	      type: "DELETE",
	      dataType: "json",
	      contentType: "application/json"
	    }).done(listAllPosts);
	  };
	
	  var clearForm = function () {
	    postForm.children(".subject-box").val("");
	    postForm.children(".body-box").val("");
	    postForm.children(".img-box").val("");
	    postForm.attr("name", "");
	    $(".subject-warning").text("");
	  };
	
	  $(".clear-btn").on("click", function (event) {
	    event.preventDefault();
	    clearForm();
	  });
	
	  $(".submit-btn").on("click", function (event) {
	    event.preventDefault();
	    var subject = $(this).parent().children(".subject-box").val();
	    var body = $(this).parent().children(".body-box").val();
	    var img = $(this).parent().children(".img-box").val();
	
	    var id = $(this).parent().attr("name");
	
	    if (subject == "") {
	      $(".subject-warning").text("* required field");
	    } else {
	      if (id == "") {
	        createPost(subject, body, img);
	      } else {
	        updatePost(id, subject, body, img);
	      }
	      clearForm();
	    }
	  });
	
	  $("#post-list").on("click", ".post-summary > .post-info", function () {
	    var id = $(this).parent().attr("id");
	    getFullPost(id, displayPost);
	  });
	
	  $("#post-list").on("click", ".post-summary > .edit", function () {
	    var id = $(this).parent().attr("id");
	    getFullPost(id, populatePostForm);
	  });
	  $("#post-list").on("click", ".post-summary > .delete", function () {
	    var id = $(this).parent().attr("id");
	    deletePost(id);
	  });
	
	  //Display existing posts on page load 
	  listAllPosts();
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWNmNTFjMTY0YTExNjg5YTU0OTEiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwicG9zdExpc3QiLCJwb3N0Rm9ybSIsImZ1bGxQb3N0Qm94IiwiZ2V0RnVsbFBvc3QiLCJpZCIsInN1Y2Nlc3NIYW5kbGUiLCJhamF4IiwidHlwZSIsImRhdGFUeXBlIiwiY29udGVudFR5cGUiLCJkb25lIiwicG9wdWxhdGVQb3N0Rm9ybSIsInBvc3QiLCJjaGlsZHJlbiIsInZhbCIsInN1YmplY3QiLCJib2R5IiwiaW1nIiwiYXR0ciIsIl9pZCIsImRpc3BsYXlQb3N0IiwidGV4dCIsImh0bWwiLCJjc3MiLCJjbG9zZVBvc3QiLCJvbiIsImxpc3RTaW5nbGVQb3N0IiwicHJldHR5VGltZSIsIm1vbWVudCIsInRpbWVzdGFtcCIsImZvcm1hdCIsInBvc3RTdW1tYXJ5VGVtcGxhdGUiLCJjbG9uZSIsImFwcGVuZCIsImxpc3RBbGxQb3N0cyIsImFsbFBvc3RzIiwiZm9yRWFjaCIsImVycm9ySGFuZGxlciIsImpxWEhSIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlUG9zdCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlUG9zdCIsImRlbGV0ZVBvc3QiLCJjbGVhckZvcm0iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFyZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNyQ0FBLEdBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFV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bkQsS0FBRSxZQUFGLEVBQWdCNEIsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBMkIsNEJBQTNCLEVBQXdELFlBQVU7QUFDaEUsU0FBSXJCLEtBQUtQLEVBQUUsSUFBRixFQUFRc0QsTUFBUixHQUFpQmpDLElBQWpCLENBQXNCLElBQXRCLENBQVQ7QUFDQWYsaUJBQVlDLEVBQVosRUFBZWdCLFdBQWY7QUFDRCxJQUhEOztBQUtBdkIsS0FBRSxZQUFGLEVBQWdCNEIsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBMkIsdUJBQTNCLEVBQW1ELFlBQVU7QUFDM0QsU0FBSXJCLEtBQUtQLEVBQUUsSUFBRixFQUFRc0QsTUFBUixHQUFpQmpDLElBQWpCLENBQXNCLElBQXRCLENBQVQ7QUFDQWYsaUJBQVlDLEVBQVosRUFBZ0JPLGdCQUFoQjtBQUNELElBSEQ7QUFJQWQsS0FBRSxZQUFGLEVBQWdCNEIsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBMkIseUJBQTNCLEVBQXNELFlBQVU7QUFDOUQsU0FBSXJCLEtBQUtQLEVBQUUsSUFBRixFQUFRc0QsTUFBUixHQUFpQmpDLElBQWpCLENBQXNCLElBQXRCLENBQVQ7QUFDQTZCLGdCQUFXM0MsRUFBWDtBQUNELElBSEQ7O0FBS0E7QUFDQThCO0FBRUQsRUExSkQsRSIsImZpbGUiOiJibG9nLXRvb2wtZXh0ZW5kZWQuMC4wLjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhY2Y1MWMxNjRhMTE2ODlhNTQ5MSIsIlxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgdmFyIHBvc3RMaXN0ID0gJChcIiNwb3N0LWxpc3RcIik7XG4gIHZhciBwb3N0Rm9ybSA9ICQoXCIjcG9zdC1mb3JtXCIpO1xuICB2YXIgZnVsbFBvc3RCb3ggPSAkKFwiI2Z1bGwtcG9zdFwiKTtcblxuICB2YXIgZ2V0RnVsbFBvc3QgPSBmdW5jdGlvbihpZCxzdWNjZXNzSGFuZGxlKXtcbiAgICAkLmFqYXgoXCIvXCIraWQse1xuICAgICAgdHlwZTpcIkdFVFwiLFxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfSlcbiAgICAuZG9uZShzdWNjZXNzSGFuZGxlKTtcbiAgfVxuICBcbiAgdmFyIHBvcHVsYXRlUG9zdEZvcm0gPSBmdW5jdGlvbihwb3N0KXtcbiAgICBwb3N0Rm9ybS5jaGlsZHJlbihcIi5zdWJqZWN0LWJveFwiKS52YWwocG9zdC5zdWJqZWN0KTtcbiAgICBwb3N0Rm9ybS5jaGlsZHJlbihcIi5ib2R5LWJveFwiKS52YWwocG9zdC5ib2R5KTtcbiAgICBwb3N0Rm9ybS5jaGlsZHJlbihcIi5pbWctYm94XCIpLnZhbChwb3N0LmltZyk7XG4gICAgcG9zdEZvcm0uYXR0cihcIm5hbWVcIixwb3N0Ll9pZCk7XG4gIH1cbiAgXG4gIHZhciBkaXNwbGF5UG9zdCA9IGZ1bmN0aW9uKHBvc3Qpe1xuICAgIGZ1bGxQb3N0Qm94LmNoaWxkcmVuKFwiLnN1YmplY3QtaGVhZGVyXCIpLnRleHQocG9zdC5zdWJqZWN0KTtcbiAgICBmdWxsUG9zdEJveC5jaGlsZHJlbihcIi5ib2R5LWNvbnRlbnRcIikuaHRtbChwb3N0LmJvZHkpO1xuICAgIGZ1bGxQb3N0Qm94LmNoaWxkcmVuKFwiLmltYWdlLWNvbnRlbnRcIikuYXR0cihcInNyY1wiLHBvc3QuaW1nKTtcbiAgICBmdWxsUG9zdEJveC5jc3MoXCJkaXNwbGF5XCIsXCJibG9ja1wiKTtcbiAgfVxuICB2YXIgY2xvc2VQb3N0ID0gZnVuY3Rpb24oKXtcbiAgICBmdWxsUG9zdEJveC5jaGlsZHJlbihcIi5zdWJqZWN0LWhlYWRlclwiKS50ZXh0KFwiXCIpO1xuICAgIGZ1bGxQb3N0Qm94LmNoaWxkcmVuKFwiLmJvZHktY29udGVudFwiKS50ZXh0KFwiXCIpO1xuICAgIGZ1bGxQb3N0Qm94LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gIH1cbiAgXG4gIGZ1bGxQb3N0Qm94LmNoaWxkcmVuKFwiLmNsb3NlLXhcIikub24oXCJjbGlja1wiLGNsb3NlUG9zdCk7XG4gIFxuICB2YXIgbGlzdFNpbmdsZVBvc3QgPSBmdW5jdGlvbihwb3N0KXtcbiAgICB2YXIgcHJldHR5VGltZSA9IG1vbWVudChwb3N0LnRpbWVzdGFtcCkuZm9ybWF0KFwiTU0tREQtWVlZWSBAIGg6bW0gYVwiKTtcbiAgICB2YXIgcG9zdFN1bW1hcnlUZW1wbGF0ZSA9ICQoXCIudGVtcGxhdGVzID4gLnBvc3Qtc3VtbWFyeVwiKS5jbG9uZSgpO1xuICAgIHBvc3RTdW1tYXJ5VGVtcGxhdGUuYXR0cihcImlkXCIscG9zdC5faWQpO1xuICAgIHBvc3RTdW1tYXJ5VGVtcGxhdGUuY2hpbGRyZW4oXCIucG9zdC1pbmZvXCIpLnRleHQocG9zdC5zdWJqZWN0K1wiIC4uLi4gXCIrcHJldHR5VGltZSk7XG4gICAgcG9zdExpc3QuYXBwZW5kKHBvc3RTdW1tYXJ5VGVtcGxhdGUpOyAgXG4gIH1cbiAgXG4gIHZhciBsaXN0QWxsUG9zdHMgPSBmdW5jdGlvbigpe1xuICAgICQuYWpheChcIi9hbGxcIix7XG4gICAgICB0eXBlOlwiR0VUXCIsXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9KVxuICAgIC5kb25lKGZ1bmN0aW9uKGFsbFBvc3RzKXtcbiAgICAgIHBvc3RMaXN0Lmh0bWwoXCJcIik7XG4gICAgICBhbGxQb3N0cy5mb3JFYWNoKGxpc3RTaW5nbGVQb3N0KTtcbiAgICB9KTtcbiAgfVxuICBcbiAgdmFyIGVycm9ySGFuZGxlciA9IGZ1bmN0aW9uKGpxWEhSLCBlcnJvcil7XG4gICAgY29uc29sZS5sb2coanFYSFIpO1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxuICBcbiAgdmFyIGNyZWF0ZVBvc3QgPSBmdW5jdGlvbihzdWJqZWN0LCBib2R5LCBpbWcpe1xuICAgIHZhciBwb3N0ID0ge1xuICAgICAgc3ViamVjdDpzdWJqZWN0LCBcbiAgICAgIGJvZHk6Ym9keSxcbiAgICAgIGltZzppbWdcbiAgICB9O1xuICBcbiAgICAkLmFqYXgoXCIvXCIse1xuICAgICAgdHlwZTpcIlBPU1RcIixcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBvc3QpLFxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfSlcbiAgICAuZG9uZShsaXN0QWxsUG9zdHMpO1xuICBcbiAgfVxuICBcbiAgdmFyIHVwZGF0ZVBvc3QgPSBmdW5jdGlvbihpZCxzdWJqZWN0LGJvZHksaW1nKXtcbiAgICB2YXIgcG9zdCA9IHtcbiAgICAgIHN1YmplY3Q6c3ViamVjdCxcbiAgICAgIGJvZHk6Ym9keSxcbiAgICAgIGltZzppbWdcbiAgICB9XG4gICAgJC5hamF4KFwiL1wiK2lkLHtcbiAgICAgIHR5cGU6XCJQVVRcIixcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBvc3QpLFxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfSlcbiAgICAuZG9uZShsaXN0QWxsUG9zdHMpO1xuICB9XG4gIFxuICB2YXIgZGVsZXRlUG9zdCA9IGZ1bmN0aW9uKGlkKXtcbiAgICAkLmFqYXgoXCIvXCIraWQse1xuICAgICAgdHlwZTpcIkRFTEVURVwiLFxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfSlcbiAgICAuZG9uZShsaXN0QWxsUG9zdHMpO1xuICB9XG4gIFxuICB2YXIgY2xlYXJGb3JtID0gZnVuY3Rpb24oKXtcbiAgICBwb3N0Rm9ybS5jaGlsZHJlbihcIi5zdWJqZWN0LWJveFwiKS52YWwoXCJcIik7XG4gICAgcG9zdEZvcm0uY2hpbGRyZW4oXCIuYm9keS1ib3hcIikudmFsKFwiXCIpO1xuICAgIHBvc3RGb3JtLmNoaWxkcmVuKFwiLmltZy1ib3hcIikudmFsKFwiXCIpO1xuICAgIHBvc3RGb3JtLmF0dHIoXCJuYW1lXCIsXCJcIik7XG4gICAgJChcIi5zdWJqZWN0LXdhcm5pbmdcIikudGV4dChcIlwiKTtcbiAgXG4gIH1cbiAgXG4gICQoXCIuY2xlYXItYnRuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xlYXJGb3JtKCk7XG4gIH0pO1xuICBcbiAgJChcIi5zdWJtaXQtYnRuXCIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbihldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgc3ViamVjdCA9ICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCIuc3ViamVjdC1ib3hcIikudmFsKCk7XG4gICAgdmFyIGJvZHkgPSAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKFwiLmJvZHktYm94XCIpLnZhbCgpO1xuICAgIHZhciBpbWcgPSAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKFwiLmltZy1ib3hcIikudmFsKCk7XG4gIFxuICAgIHZhciBpZCA9ICQodGhpcykucGFyZW50KCkuYXR0cihcIm5hbWVcIik7XG4gIFxuICAgIGlmKHN1YmplY3QgPT0gXCJcIil7XG4gICAgICAkKFwiLnN1YmplY3Qtd2FybmluZ1wiKS50ZXh0KFwiKiByZXF1aXJlZCBmaWVsZFwiKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGlmKGlkID09IFwiXCIpe1xuICAgICAgICBjcmVhdGVQb3N0KHN1YmplY3QsYm9keSxpbWcpO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgdXBkYXRlUG9zdChpZCwgc3ViamVjdCwgYm9keSwgaW1nKTtcbiAgICAgIH1cbiAgICAgIGNsZWFyRm9ybSgpO1xuICAgIH1cbiAgfSk7XG4gIFxuICAkKFwiI3Bvc3QtbGlzdFwiKS5vbihcImNsaWNrXCIsXCIucG9zdC1zdW1tYXJ5ID4gLnBvc3QtaW5mb1wiLGZ1bmN0aW9uKCl7XG4gICAgdmFyIGlkID0gJCh0aGlzKS5wYXJlbnQoKS5hdHRyKFwiaWRcIik7XG4gICAgZ2V0RnVsbFBvc3QoaWQsZGlzcGxheVBvc3QpO1xuICB9KTtcbiAgXG4gICQoXCIjcG9zdC1saXN0XCIpLm9uKFwiY2xpY2tcIixcIi5wb3N0LXN1bW1hcnkgPiAuZWRpdFwiLGZ1bmN0aW9uKCl7XG4gICAgdmFyIGlkID0gJCh0aGlzKS5wYXJlbnQoKS5hdHRyKFwiaWRcIik7XG4gICAgZ2V0RnVsbFBvc3QoaWQsIHBvcHVsYXRlUG9zdEZvcm0pO1xuICB9KTtcbiAgJChcIiNwb3N0LWxpc3RcIikub24oXCJjbGlja1wiLFwiLnBvc3Qtc3VtbWFyeSA+IC5kZWxldGVcIiwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaWQgPSAkKHRoaXMpLnBhcmVudCgpLmF0dHIoXCJpZFwiKTtcbiAgICBkZWxldGVQb3N0KGlkKTtcbiAgfSk7XG4gXG4gIC8vRGlzcGxheSBleGlzdGluZyBwb3N0cyBvbiBwYWdlIGxvYWQgXG4gIGxpc3RBbGxQb3N0cygpO1xuICBcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9