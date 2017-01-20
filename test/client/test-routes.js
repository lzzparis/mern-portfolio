var React = require("react");
var should = require("chai").should();
var match = require("react-router").match;


var routes = require("../../client/js/routes");

describe("Routes", function(){

  it("should render App, BusinessCard when visiting /", function(done){
    match({routes, location: "/"}, function(error, redirectLocation, renderProps) {
      var App = function () {};
      if (error) {
        console.error(error);
      };
      var results = renderProps.components;      
      results[1].displayName.should.equal("App");
      results[2].WrappedComponent.displayName.should.equal("BusinessCard");
    })
    done();
  })
  it("should render App, ProjectList when visiting /projects", function(done){
    match({routes, location: "/projects"}, function(error, redirectLocation, renderProps) {
      var App = function () {};
      if (error) {
        console.error(error);
      };
      var results = renderProps.components;      
      results[1].displayName.should.equal("App");
      results[2].WrappedComponent.displayName.should.equal("ProjectList");
    })
    done();
  })
  it("should render App, Connect when visiting /connect", function(done){
    match({routes, location: "/connect"}, function(error, redirectLocation, renderProps) {
      var App = function () {};
      if (error) {
        console.error(error);
      };
      var results = renderProps.components;      
      results[1].displayName.should.equal("App");
      results[2].WrappedComponent.displayName.should.equal("Connect");
    })
    done();
  })

/*Blog*/
  it("/blog/posts/latest renders BlogApp, Blog, LatestPosts", function(done) {
    match({routes, location: "/blog/posts/latest"}, function(error, redirectLocation, renderProps) {
      var results = renderProps.components;      
      results[1].displayName.should.equal("App");
      results[2].WrappedComponent.displayName.should.equal("BlogApp");
      results[3].WrappedComponent.displayName.should.equal("Blog");
      results[4].WrappedComponent.displayName.should.equal("LatestPosts");
    })
    done();
  })
  it("/blog/posts/full/:id renders BlogApp, Blog, FullPost", function(done) {
    match({routes, location: "/blog/posts/full/1000"}, function(error, redirectLocation, renderProps) {
      var results = renderProps.components;      
      results[1].displayName.should.equal("App");
      results[2].WrappedComponent.displayName.should.equal("BlogApp");
      results[3].WrappedComponent.displayName.should.equal("Blog");
      results[4].WrappedComponent.displayName.should.equal("FullPost");
    })
    done();
  })
  it("/blog/login renders BlogApp, Login", function(done) {
    match({routes, location: "/blog/login"}, function(error, redirectLocation, renderProps) {
      var results = renderProps.components;      
      results[1].displayName.should.equal("App");
      results[2].WrappedComponent.displayName.should.equal("BlogApp");
      results[3].WrappedComponent.displayName.should.equal("Login");
    })
    done();
  })
  it("/blog/admin renders BlogApp, Admin", function(done) {
    match({routes, location: "/blog/admin"}, function(error, redirectLocation, renderProps) {
      var results = renderProps.components;      
      results[1].displayName.should.equal("App");
      results[2].WrappedComponent.displayName.should.equal("BlogApp");
      results[3].WrappedComponent.displayName.should.equal("Admin");
    })
    done();
  })
  it("/blog/admin/preview/:id renders BlogApp, Admin, PreviewPost", function(done) {
    match({routes, location: "/blog/admin/preview/1000"}, function(error, redirectLocation, renderProps) {
      var results = renderProps.components;      
      results[1].displayName.should.equal("App");
      results[2].WrappedComponent.displayName.should.equal("BlogApp");
      results[3].WrappedComponent.displayName.should.equal("Admin");
      results[4].displayName.should.equal("PreviewPost");
      results[5].WrappedComponent.displayName.should.equal("FullPost");
    })
    done();
  })



}); 
