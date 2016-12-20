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
      results[2].displayName.should.equal("BusinessCard");
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
      results[2].displayName.should.equal("ProjectList");
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
      results[2].displayName.should.equal("Connect");
    })
    done();
  })
}); 
