var React = require("react");
var should = require("chai").should();
var match = require("react-router").match;


var routes = require("../../client/js/routes");

describe("Routes", function() {
  it("/ redirects to /blog/latest", function(done) {
    match({routes, location: "/"}, function(error, redirectLocation, renderProps) {
      redirectLocation.pathname.should.equal("/blog/latest");
    })
    done();
  })
  it("/blog redirects to /blog/latest", function(done) {
    match({routes, location: "/blog"}, function(error, redirectLocation, renderProps) {
      redirectLocation.pathname.should.equal("/blog/latest");
    })
    done();
  })
  it("/blog/latest renders App, Blog, LatestPosts", function(done) {
    match({routes, location: "/blog/latest"}, function(error, redirectLocation, renderProps) {
      var results = renderProps.components;      
      results[1].WrappedComponent.displayName.should.equal("App");
      results[2].WrappedComponent.displayName.should.equal("Blog");
      results[3].WrappedComponent.displayName.should.equal("LatestPosts");
    })
    done();
  })
  it("/blog/full/:id renders App, Blog, FullPost", function(done) {
    match({routes, location: "/blog/full/1000"}, function(error, redirectLocation, renderProps) {
      var results = renderProps.components;      
      results[1].WrappedComponent.displayName.should.equal("App");
      results[2].WrappedComponent.displayName.should.equal("Blog");
      results[3].WrappedComponent.displayName.should.equal("FullPost");
    })
    done();
  })
  it("/login renders App, Login", function(done) {
    match({routes, location: "/login"}, function(error, redirectLocation, renderProps) {
      var results = renderProps.components;      
      results[1].WrappedComponent.displayName.should.equal("App");
      results[2].WrappedComponent.displayName.should.equal("Login");
    })
    done();
  })
  it("/admin renders App, Admin", function(done) {
    match({routes, location: "/admin"}, function(error, redirectLocation, renderProps) {
      var results = renderProps.components;      
      results[1].WrappedComponent.displayName.should.equal("App");
      results[2].WrappedComponent.displayName.should.equal("Admin");
    })
    done();
  })
  it("/admin/preview/:id renders App, Admin, PreviewPost", function(done) {
    match({routes, location: "/admin/preview/1000"}, function(error, redirectLocation, renderProps) {
      var results = renderProps.components;      
      results[1].WrappedComponent.displayName.should.equal("App");
      results[2].WrappedComponent.displayName.should.equal("Admin");
      results[3].displayName.should.equal("PreviewPost");
      results[4].WrappedComponent.displayName.should.equal("FullPost");
    })
    done();
  })

}) 
